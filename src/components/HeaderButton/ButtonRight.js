import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { icons } from '../../assets/StaticFiles';
import { useNavigation } from '@react-navigation/native';

const ButtonHeader = () => {
	const navigation = useNavigation();
	return (
		<TouchableWithoutFeedback onPress={() => navigation.goBack()}>
			<View style={styles.container}>
				<Image source={icons.backbtn} style={{ height: 17, width: 17, resizeMode: 'contain' }} />
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingRight: 10
	}
});

export default ButtonHeader;
