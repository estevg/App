import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={() => navigation.navigate('LevelStack')}>
				<View style={styles.btn}>
					<Text style={styles.btnText}>Ir a Niveles</Text>
				</View>
			</TouchableWithoutFeedback>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btn: {
		height: 40,
		width: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 15,
		borderWidth: 1
	},
	btnText: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 15
	}
});

export default Home;
