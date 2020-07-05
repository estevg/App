import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LevelView from '@/view/Level';

import ButtonLeft from '@/components/HeaderButton/ButtonLeft'
import ButtonRight from '@/components/HeaderButton/ButtonRight'


const Level = createStackNavigator();

const LevelStack = () => {
	return (
		<Level.Navigator
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
				},
				borderBottomWidth: 0
			},
			headerTitleAlign: 'center',
		}}>
			<Level.Screen
				name="Nivel"
				component={LevelView}
				options={{
					title: 'Sube de nivel',
					headerLeft: () => <ButtonLeft />,
					headerBackTitleVisible: false,
					headerRight: () => <ButtonRight />
				}}
			/>
		</Level.Navigator>
	);
};

export default LevelStack;
