import React, { useState } from 'react';
import { View, Image, FlatList, ScrollView } from 'react-native';
import { Body, Title } from '@/components/common/Typography';
import { colors } from '@/theme';
import { images } from '@/assets/StaticFiles';
import ChallengeItemInfo from '@/components/level/challengeItem/ChallengeItemInfo';

const ChallengeSection = () => {
	const [ info ] = useState([
		{ key: 1, text: 'Completa tu curriculum', status: '32%', progress: 32 },
		{ key: 2, text: 'Trae 3 amigos a Adictic', status: '1/3', progress: 52 },
		{ key: 3, text: 'Consigue 20 seguidores', status: '32%', progress: 32 },
		{ key: 4, text: 'Sube 6 pubicaciones', status: '1/6', progress: 40 },
		{ key: 5, text: 'Sube una foto de perfil', status: '100%', progress: 100 },
	]);

	return (
		<View style={{ flex: 1 }}>
			<View style={{ marginTop: 23, flex: 1 }}>
				<View style={{ marginBottom: 20 }}>
					<Body font={4} size={1} color={colors.gray}>
						Para subir de nivel completa los siguientes desafíos.
					</Body>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Body font={3} size={2} color={colors.color4}>
						Nivel actual:
					</Body>
					<View style={{ marginHorizontal: 12, width: 23, height: 22 }}>
						<Image source={images.Professional} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
					</View>
					<Title font={1} size={5} color={colors.color4}>
						Profesional
					</Title>
				</View>
				<View>

					<View style={{ marginTop: 40, flex: 1 }}>
						<FlatList
							showsVerticalScrollIndicator={false}
							style={{ flex: 1 }}
							data={info}
							renderItem={(item) => <ChallengeItemInfo item={item} />}
							keyExtractor={(item, index) => `info${item.key}`}
						/>
					</View>
				</View>
			</View>
		</View>
	);
};

export default ChallengeSection;
