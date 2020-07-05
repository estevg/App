import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@/theme';
import { Body } from '@/components/common/Typography';
import { TouchableOpacity, Platform, StyleSheet } from 'react-native';

const Button = ({ TouchableComponent, title, onPress, width, height, ...props }) => {
	return (
		<TouchableComponent {...props} style={styles.button({width, height})}>
			<Body font={4} size={3} color={colors.color2}>
				{title}
			</Body>
		</TouchableComponent>
	);
};

Button.propTypes = {
	TouchableComponent: PropTypes.elementType,
	title: PropTypes.string,
	onPress: PropTypes.func
};

Button.defaultProps = {
	TouchableComponent: Platform.select({
		default: TouchableOpacity
	}),
	title: '',
    onPress: () => console.log('please add an onPress event'),
    width: 150,
    height: 32
};

const styles = StyleSheet.create({
	button: ({width, height}) => ({
		borderRadius: 20,
		borderColor: colors.color1,
		borderWidth: 1,
		width: width,
		height: height,
		marginTop: 7,
		justifyContent: 'center',
		alignItems: 'center'
	})
});

export default Button;
