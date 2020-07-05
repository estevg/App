import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '@/theme';
import { View } from 'react-native';
import { Circle } from '@/components/common/Figure';
import { Button } from '@/components/common/Button'
import { Title } from '@/components/common/Typography';


const ChallengeItemInfo = ({item}) => {
	return (	
		<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 21,  }}>
			<View>
				<Title font={2} size={3}>
					{item.item.text}
				</Title>
				<Button title="Ir a completar desafio" />
			</View>
			<Circle
				size={44}
				strokeWidth={5}
				progressPercent={item.item.progress}
				bgColor={colors.color1}
				pgColor={colors.blue}
				text={item.item.status}
				textSize={12}
				textColor={colors.color2}
			/>
		</View>
	);
};

ChallengeItemInfo.propTypes = {
	item: PropTypes.object,
};


export default React.memo(ChallengeItemInfo);
