import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import PropTypes from "prop-types"; 
import { fontSizes, colors, fontFamilies } from "../../../theme/";

function Body ({ 
  children,
  size,
  color,
  style,
  font
}) {
  return (
    <Text 
      style={StyleSheet.flatten([
        style, 
        styles.bodyStyles({ size, color, font })
      ])}
    >
      {children}
    </Text>
  )
};

const styles = StyleSheet.create({
  bodyStyles: ({ size, color, font }) => ({
    fontSize: fontSizes[`body${size}`],
    color: color,
    ...Platform.select({
      ios: {
        fontFamily: fontFamilies[`font${font}`]
      },
      android: {
        fontFamily: fontFamilies[`font${font}`]
      }
    })
  })
});

Body.proTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf([1, 2, 3, 4 ]),
  color: PropTypes.string,
  style: Text.propTypes.style,
};

Body.defaultProps = {
  size: 1,
  color: colors.black,
  font: fontFamilies.MuliRegular
};


export default Body;