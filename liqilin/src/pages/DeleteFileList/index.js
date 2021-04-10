import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import IconFont from '../../components/iconfont';
import NoteList from '../../components/NoteList';
const DeleteFileList = () => {
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
        <Text style={styles.headerTitle}>最近删除</Text>
        <Text style={[styles.headerTitle, { opacity: 0 }]}>恢复</Text>
      </View>
      <NoteList listType="del" />
    </View>
  );
};
export default DeleteFileList;
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
});
