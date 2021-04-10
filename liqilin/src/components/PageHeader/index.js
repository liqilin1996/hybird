import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
const PageHeader = () => {
  return (
    <View style={styles.main}>
      <Text>PageHeader</Text>
      <Text>PageHeader</Text>
      <Text>PageHeader</Text>
    </View>
  );
};
export default PageHeader;
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});
