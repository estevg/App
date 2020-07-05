import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import PropTypes from "prop-types"; 
import { fontSizes, colors, fontFamilies } from "@/theme";

function Title ({ 
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
        styles.titleStyles({ size, color, font })
      ])}
    >
      {children}
    </Text>
  )
};

const styles = StyleSheet.create({
  titleStyles: ({ size, color, font }) => ({
    fontSize: fontSizes[`title${size}`],
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

Title.proTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6 ]),
  color: PropTypes.string,
  style: Text.propTypes.style,
};

Title.defaultProps = {
  size: 1,
  color: colors.black,
  font: fontFamilies.MuliRegular
};


export default Title;