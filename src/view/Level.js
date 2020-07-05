import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { colors } from '@/theme';
import { images } from '@/assets/StaticFiles';
import { Body, Title } from '@/components/common/Typography';

import LevelInfo from '@/components/level/card/LevelInfo';
import LevelsCard from '@/components/level/card/LevelsCard';
import PremiumCard from '@/components/level/card/PremiumCard';
import LevelTab from '@/components/level/tab/LevelTab';

const Level = () => {
	const [ progress, setProgress ] = useState(0);
	const [ levels ] = useState([
		{ key: 1, name: 'Rookie', benefit: '4 beneficios', img: images.Rokkie },
		{ key: 2, name: 'Profesional', benefit: '6 beneficios', img: images.Professional },
		{ key: 3, name: 'Adicter', benefit: '8 beneficios', img: images.Adicter },
		{ key: 4, name: 'Premium', benefit: '10 beneficios', img: images.Premium }
	]);

	const [ tabs, setTab ] = useState({
		index: 0,
		routes: [ { key: 1, title: 'Desafios' }, { key: 2, title: 'Beneficios' } ],
		rendered: false,
		loading: true
	});

	const useInterval = (callback, delay) => {
		const savedCallback = useRef();

		useEffect(
			() => {
				savedCallback.current = callback;
			},
			[ callback ]
		);

		useEffect(
			() => {
				function tick() {
					savedCallback.current();
				}
				if (delay !== null) {
					let id = setInterval(tick, delay);
					return () => clearInterval(id);
				}
			},
			[ delay ]
		);
	};

	useInterval(() => {
		if (progress < 45) {
			setProgress(progress + 1);
		}
	}, 90);
	const HEIGHT = tabs.index < 1 ? 807 : 559;
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
			<View style={styles.content}>
				<View style={styles.containedText}>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Title size={1} font={2}>
							Hola, Esteban!
						</Title>
						<View style={styles.conteinedImage}>
							<Image source={images.profile} style={styles.profileImage} />
						</View>
					</View>
					<View style={styles.description}>
						<Body size={1} font={4} color={colors.gray}>
							Hecha un vistazo a los beneficios que tendrás si subes un nivel
						</Body>
					</View>
				</View>

				<View style={{ marginTop: 35, alignItems: 'center' }}>
					<Title size={1} font={2} color={'#535E71'}>
						Rookie
					</Title>
					<View style={{ marginTop: 17, width: '100%', height: 200 }}>
						<LevelInfo progress={progress} />
					</View>
					<View style={{ marginTop: 30 }}>
						<LevelsCard levels={levels} />
					</View>
					<View style={{ marginTop: 30, width: '100%' }}>
						<View style={styles.cardBox({ HEIGHT })}>
							<View style={styles.contentCardBox}>
								{tabs.index < 1 && <PremiumCard />}

								<View style={{ flex: 1, marginTop: tabs.index < 1 ? 40 : 15 }}>
									<LevelTab tabs={tabs} setTab={setTab} />
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	content: {
		flex: 1,
		marginHorizontal: 20
	},
	containedText: {
		marginTop: 40
	},
	description: {
		width: 330,
		marginTop: 5
	},
	conteinedImage: {
		borderRadius: 20,
		overflow: 'hidden',
		width: 40,
		height: 40
	},
	profileImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	},
	cardBox: ({ HEIGHT }) => ({
		borderRadius: 10,
		backgroundColor: '#fff',
		// height: HEIGHT,
		width: '100%',
		borderWidth: 1,
		borderColor: '#F4F7FD',
		shadowColor: '#F0F6FF',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,
		elevation: 6,
		marginBottom: 30
	}),
	contentCardBox: {
		paddingHorizontal: 18,
		paddingTop: 24,
		flex: 1
	}
});

export default Level;
