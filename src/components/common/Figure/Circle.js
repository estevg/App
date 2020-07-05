import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Circle, Text as SVGText } from 'react-native-svg';
import { View } from 'react-native';
import { fontFamilies } from "@/theme";


const CircleSvg = ({ children, size, strokeWidth, progressPercent, bgColor, pgColor,textSize, textColor, text }) => {
	const radius = (size - strokeWidth) / 2;
	const circum = radius * 2 * Math.PI;
	const svgProgress = 100 - progressPercent;

	return (
		<View style={{ marginBottom: 10 }}>
			<Svg width={size} height={size}>
				<Circle
					stroke={bgColor ? bgColor : '#f2f2f2'}
					fill="none"
					cx={size / 2}
					cy={size / 2}
					r={radius}
					{...{ strokeWidth }}
				/>

				{/* Progress Circle */}
				<Circle
					stroke={pgColor ? pgColor : '#3b5998'}
					fill="none"
					cx={size / 2}
					cy={size / 2}
					r={radius}
					strokeDasharray={`${circum} ${circum}`}
					strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
					strokeLinecap="round"
					transform={`rotate(-90, ${size / 2}, ${size / 2})`}
					{...{ strokeWidth }}
				/>
				{children}

				{text && (
					<SVGText
						fontSize={textSize ? textSize : '10'}
						x={size / 2}
						y={size / 2 + (textSize ? textSize / 2 - 1 : 5)}
						textAnchor="middle"
						fill={textColor ? textColor : '#B6BFCE'}
						fontFamily={fontFamilies.font5}
						fontWeight="bold"
					>
						{text}
					</SVGText>
				)}
			</Svg>
		</View>
	);
};

CircleSvg.PropTypes = {
	children: PropTypes.node,
	size: PropTypes.number,
	strokeWidth: PropTypes.number,
	progressPercent: PropTypes.number,
	bgColor: PropTypes.string,
	pgColor: PropTypes.string,
	textSize: PropTypes.number,
	textColor: PropTypes.string,
	text: PropTypes.string,
}

CircleSvg.defaultProps = {
	size: 100,
	strokeWidth: 5,
	progressPercent: 30,
}


export default CircleSvg;
