import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@/components/common/Button';
import { Title, Body } from '@/components/common/Typography';
import { colors } from '@/theme';

const BenefitItemInfo = ({ item }) => {
	const { text, status, routes, key } = item.item;

	return (
		<View style={styles.container}>
			<View>
				<View style={{ width: 210 }}>
					<Title font={2} size={3}>
						{text}
					</Title>
				</View>

				{key === 1 && <Button title={routes[0]} width={124} />}
				{key === 2 && <Button title={routes[0]} width={84} />}

				{key === 3 && (
					<View style={{ flexDirection: 'row' }}>
						{routes.map((item, i) => {
							return (
								<View key={`btn${i}`} style={{ paddingRight: 10 }}>
									{i === 0 && <Button title={item} width={86} />}
									{i === 1 && <Button title={item} width={102} />}
								</View>
							);
						})}
					</View>
				)}
				{key === 4 && <Button title={routes[0]} width={91} />}
			</View>
			<Body font={4} size={2} color={colors.color8}>
				{status}
			</Body>
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 21
	}
});

export default BenefitItemInfo;
