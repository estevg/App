import React from 'react';
import { ImageBackground, View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '@/theme';
import { images, icons } from '@/assets/StaticFiles';
import { Title } from '@/components/common/Typography';
import { Circle } from '@/components/common/Figure';

const LevelInfo = ({ progress }) => {
	return (
		<ImageBackground source={images.background} style={styles.conatiner}>
			<ImageBackground source={icons.poligono} style={styles.icons}>
				<Title size={6} font={2} color={colors.color2}>
					{progress}
					<Title size={6} font={2} color={colors.color3}>
						%
					</Title>
				</Title>
			</ImageBackground>
			<View style={styles.contentCicle}>
				<Circle
					size={141}
					strokeWidth={5}
					progressPercent={progress}
					bgColor={colors.color1}
					pgColor={colors.pink}
				>
					<View style={styles.containedImage}>
						<Image source={images.Rokkie} style={styles.image} />
					</View>
				</Circle>
				<View style={{ flexDirection: 'row' }}>
					<Title size={5} font={3} color={colors.color4}>
						Siguiente nivel:
					</Title>
					<Title size={5} font={1} color={colors.color4}>
						{' '}
						Profesional
					</Title>
				</View>
			</View>
			<ImageBackground source={icons.elipse} style={styles.icons}>
				<Title size={6} font={2} color={colors.color2}>
					¡
				</Title>
			</ImageBackground>
		</ImageBackground>
	);
};

LevelInfo.propTypes = {
	progress: PropTypes.number
};

LevelInfo.defaultProps = {
	progress: 0
};

const styles = StyleSheet.create({
	conatiner: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		paddingHorizontal: 20
	},
	icons: {
		width: 40,
		height: 40,
		resizeMode: 'contain',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20
	},
	contentCicle: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	containedImage: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
	},
	image: {
		width: 105,
		height: 105,
		resizeMode: 'contain'
	}
});

export default LevelInfo;
