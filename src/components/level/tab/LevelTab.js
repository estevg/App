import React from 'react';
import { StyleSheet } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { colors } from '@/theme';


import ChallengeSection from '../../../components/level/ChallengeSection'
import BenefitsSection from '../../../components/level/BenefitsSection'
import Label from './Label';


const LevelTab = ({ tabs, setTab }) => {
	return (
		<TabView
			navigationState={tabs}
			swipeEnabled={false}
			onIndexChange={(index) => setTab({ ...tabs, index })}
			renderScene={({ route,  }) => {
				switch (route.key) {
					case 1:
						return <ChallengeSection />
					case 2:
						return <BenefitsSection />;
					default:
						return null;
				}
			}}
			renderTabBar={(props) => (
				<TabBar
					{...props}
					indicatorStyle={styles.indicatorStyle}
					style={{ backgroundColor: 'transparent' }}
					renderLabel={(props) => <Label {...props} />}
				/>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	indicatorStyle: {
		backgroundColor: colors.pink,
		width: 4,
		borderRadius: 20,
		left: '23%',
		borderBottomWidth: 4,
		borderBottomColor: colors.pink
	}
});

export default LevelTab;
