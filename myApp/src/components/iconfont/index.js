/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

const IconFont = ({style, type, fontSize}) => {
  return (
    <Text style={[{fontFamily: 'iconfont', fontSize}, style]}>{type}</Text>
  );
};

export default IconFont;
