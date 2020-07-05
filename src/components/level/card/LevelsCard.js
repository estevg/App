import React from 'react';
import PropTypes from "prop-types"; 
import { View, Image, FlatList, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { colors } from '@/theme';
import { icons } from '@/assets/StaticFiles';
import { Body, Title } from '@/components/common/Typography';

const LevelsCard = ({ levels, onPress, TouchableComponent,  }) => {
	return (
		<View style={styles.container}>
			<View style={{ paddingTop: 22, flex: 1 }}>
				<View style={styles.containedText}>
					<View style={styles.containedImage}>
						<Image source={icons.menu} style={styles.imageMenu} />
					</View>
					<View style={{ marginLeft: 8 }}>
						<Title font={2} size={2}>
							Niveles
						</Title>
					</View>
					<View style={styles.moreText}>
                        <TouchableComponent onPress={() => onPress()}>
                            <Title font={5} size={2} color={colors.color2}>
                                Ver todo
                            </Title>
                        </TouchableComponent>
					</View>
				</View>

				<FlatList
					style={{ marginHorizontal: 5}}
					horizontal
					showsHorizontalScrollIndicator={false}
					data={levels}
					renderItem={({ item }) => (
						<View style={{ marginLeft: 34, alignItems: 'center', }}>
                            <TouchableComponent onPress={() => onPress()}>
                                <View style={styles.containedLevel}>
                                    <Image source={item.img} style={styles.imageLevel} />
                                </View>
                            </TouchableComponent>
							<View style={{ marginVertical: 2 }}>
								<Title font={2} size={4}>
									{item.name}
								</Title>
							</View>
							<Body font={4} size={3} color={colors.gray}>
								{item.benefit}
							</Body>
						</View>
					)}
					keyExtractor={(item, key) => `item${item.key}`}
				/>
			</View>
		</View>
	);
};

LevelsCard.defaultProps = {
	TouchableComponent: Platform.select({
		android: TouchableNativeFeedback,
		default: TouchableOpacity
	}),
    onPress: () => console.log('please add an onPress event'),
};



const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		backgroundColor: '#fff',
		height: 196,
		width: '100%',
		borderWidth: 1,
		borderColor: '#F4F7FD',
		shadowColor: '#F0F6FF',
		shadowOffset: {
			width: 0,
			height: 3
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6
	},
	containedText: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 22,
		paddingHorizontal: 18
	},
	containedImage: {
		width: 18,
		height: 20
	},
	imageMenu: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	},
	moreText: {
		marginLeft: 8,
		flex: 1,
		alignItems: 'flex-end'
	},
	containedLevel: {
		width: 68,
		height: 68
	},
	imageLevel: {
		width: 68,
		height: 68,
		resizeMode: 'contain'
	}
});

export default LevelsCard;
