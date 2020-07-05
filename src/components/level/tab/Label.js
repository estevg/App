import React from 'react';
import { View, Image } from 'react-native';
import { colors } from '@/theme';
import { icons } from '@/assets/StaticFiles';
import { Title } from '@/components/common/Typography';

const Lavel = ({ route, focused }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between'
			}}
		>
			<View style={{ marginRight: 5 }}>
				{route.key === 1 && (
					<Image
						source={focused && route.key === 1 ? icons.flag : icons.flag2}
						style={{ width: 14, height: 16, resizeMode: 'contain' }}
					/>
				)}
				{route.key === 2 && (
					<Image
						source={focused && route.key === 2 ? icons.medal : icons.medal2}
						style={{ width: 14, height: 16, resizeMode: 'contain' }}
					/>
				)}
			</View>
			<Title font={2} size={2} color={focused ? colors.black : colors.color6}>
				{route.title}
			</Title>
		</View>
	);
};

export default Lavel;
