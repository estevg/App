import React, { useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import { Body, Title } from '@/components/common/Typography';
import { colors } from '@/theme';
import { images } from '@/assets/StaticFiles';
import BenefitItemInfo from '@/components/level/benefitsItem/BenefitItemInfo';



const BenefitsSection = () => {

    const [ info ] = useState([
		{ key: 1, text: 'Activa tu Wallet', status: 'Disponible', routes: ['Ir a Adictic Wallet'] },
		{ key: 2, text: 'Solicita tu tienda Adictic', status: 'Disponible', routes: ['Ir a Tienda'] },
		{ key: 3, text: 'Publica ofertas de empleo ó formación', status: 'Disponible', routes: ['Ir a empleo', 'Ir a formación'] },
		{ key: 4, text: 'Crea colaboraciones', status: 'Disponible', routes: ['Ir a publicar'] },
	]);

    return ( 
		<View style={{ flex: 1 }}>
			<View style={{ marginTop: 23, flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
					<Body font={3} size={2} color={colors.color4}>
						Nivel actual:
					</Body>
					<View style={{ marginHorizontal: 12, width: 23, height: 22 }}>
						<Image source={images.Rokkie} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
					</View>
					<Title font={1} size={5} color={colors.color4}>
                        Rookie
					</Title>
				</View>

                <View style={{ marginTop: 22 }}>
					<Body font={4} size={1} color={colors.gray}>
                        Por ser Rookie tienes los siguientes beneficios
					</Body>
				</View>

				<View style={{ marginTop: 40, flex: 1 }}>
					<FlatList
						showsVerticalScrollIndicator={false}
						style={{ flex: 1 }}
						data={info}
						renderItem={(item) => <BenefitItemInfo item={item} />}
						keyExtractor={(item, index) => `info${item.key}`}
					/>
				</View>
			</View>
		</View>
     );
}
 
export default BenefitsSection;