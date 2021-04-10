/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import IconFont from '../../components/iconfont';
import NoteList from '../../components/NoteList';
const NoteFileList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={styles.pageHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <IconFont type={'\ue744'} fontSize={40} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>便签</Text>
        <Text style={[styles.headerTitle, { opacity: 0 }]}>编辑</Text>
      </View>

      <View style={styles.searchBar}>
        <View style={styles.searchContent}>
          <IconFont type={'\ue7b4'} style={styles.searchText} fontSize={28} />
          <Text style={styles.searchText}>搜索便签</Text>
        </View>
      </View>

      <NoteList />
    </View>
  );
};
export default NoteFileList;
const styles = StyleSheet.create({
  main: { flex: 1 },
  pageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 4,
  },
  searchBar: {
    paddingHorizontal: '5%',
    backgroundColor: '#FFF',
    paddingVertical: 10,
  },
  searchContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 6,
  },
  searchText: {
    color: '#999',
  },
});
