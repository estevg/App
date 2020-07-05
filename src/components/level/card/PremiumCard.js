import React from 'react';
import { images, icons } from '@/assets/StaticFiles';
import { Body, Title } from '@/components/common/Typography';
import { colors } from '@/theme';

import { View, Image, ImageBackground, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const PremiumCard = () => {
	return (
		<View style={styles.content}>
			<LinearGradient
				colors={[ '#FF58BF', '#FFA0E5' ]}
				start={{ x: 1, y: 0 }}
				end={{ x: 0, y: 1 }}
				style={{ height: 183 }}
			>
				<ImageBackground source={images.background} style={styles.ImageBackground}>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.containedImage}>
							<Image source={images.Premium2} style={styles.imagePremium} />
						</View>
						<View style={styles.contentText}>
							<Title font={5} size={3} color={colors.color5}>
								Hazte{' '}
								<Title font={1} size={3} color={colors.color5}>
									Premium{' '}
									<Title font={5} size={3} color={colors.color5}>
										ahora{' '}
									</Title>
								</Title>
							</Title>
							<View style={{ width: 200, marginTop: 2 }}>
								<Body font={5} size={1} color={colors.white}>
									Sube ya de nivel con este acceso rápido por 19€ mensual
								</Body>
							</View>
						</View>
					</View>
					<View style={styles.btn}>
						<Title font={1} size={2} color={colors.white}>
							Obtener acceso rápido
						</Title>
					</View>
				</ImageBackground>
			</LinearGradient>
		</View>
	);
};

const styles = StyleSheet.create({
	content: {
		borderRadius: 15,
		overflow: 'hidden'
	},
	ImageBackground: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		paddingHorizontal: 16,
		paddingTop: 24
	},
	containedImage: {
		width: 64,
		height: 64,
		marginTop: 10
	},
	imagePremium: {
		height: '100%',
		width: '100%',
		resizeMode: 'contain'
	},
	contentText: {
		marginHorizontal: 21
	},
	btn: {
		height: 40,
		backgroundColor: '#FFA0E5',
		width: '100%',
		marginTop: 14,
		borderRadius: 9,
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default PremiumCard;
