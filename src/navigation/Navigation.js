import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../view/Home';
import Level from './level/LevelStack';

const Stack = createStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerTitleStyle: {
						fontWeight: '700',
						fontFamily: 'Muli-ExtraBold'
					},
					headerTintColor: '#000',
					headerStyle: {
						backgroundColor: '#fff',
						shadowColor: 'transparent',
						shadowRadius: 0,
						shadowOffset: {
							height: 0
						}
					}
				}}
			>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false
					}}
				/>
				<Stack.Screen
					name="LevelStack"
					component={Level}
					options={{
						headerShown: false
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
