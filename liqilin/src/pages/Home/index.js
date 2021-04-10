import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import IconFont from '../../components/iconfont';
import AllNote from './Components/AllNote';
import Folder from './Components/Folder';

const types = [
  {
    name: '全部',
    conponent: AllNote,
  },
  {
    name: '文件夹',
    conponent: Folder,
  },
];

const Home = () => {
  const [activeType, setActiveType] = useState(0);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        {types.map((item, index) => (
          <View key={index} style={styles.headerItem}>
            <TouchableOpacity
              onPress={() => {
                setActiveType(index);
              }}>
              <View style={styles.itemView}>
                <Text
                  style={[
                    styles.headerItemText,
                    activeType === index ? styles.activeSty : '',
                  ]}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {activeType === 0 ? <AllNote /> : <Folder />}
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  main: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerItem: {
    flex: 0.5,
  },
  headerItemText: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 2,
    color: '#666',
    borderBottomColor: 'transparent',
  },
  itemView: { alignSelf: 'center' },
  activeSty: {
    borderBottomColor: '#f0b143',
    color: '#f0b143',
  },
});
