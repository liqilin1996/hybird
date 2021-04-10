import { useFocusEffect, useNavigation } from '@react-navigation/core';
import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { changeStorageItem, getStorage } from '../../utils/storageUtils';
import SwipeableRow from '../SwipeableRow';
const NoteList = (props) => {
  const navigation = useNavigation();

  const [allNoteList, setAllNoteList] = useState([]);

  const getData = () => {
    getStorage().then((res) => {
      const list =
        res?.filter((item) => {
          if (props.listType === 'del') {
            return item.isDel;
          } else {
            return !item.isDel;
          }
        }) || [];
      setAllNoteList(list);
    });
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );

  const renderItem = ({ item }) => {
    const options = [
      /* {
        name: '完成',
        color: '#19971A',
        callback: () => {
          console.log('完成');
        },
      }, */
      {
        name: '删除',
        color: '#dd2c00',
        callback: () => {
          changeStorageItem(item.id, 'delete').then(() => {
            getData();
          });
        },
      },
    ];
    return props.listType === 'del' ? (
      <View style={styles.gameItemSty}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text>{item.time}</Text>
      </View>
    ) : (
      <SwipeableRow options={options}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate('EditNote', item);
          }}>
          <View style={styles.gameItemSty}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text>{item.time}</Text>
          </View>
        </TouchableOpacity>
      </SwipeableRow>
    );
  };

  const itemSeparatorComponent = () => {
    return <View style={{ height: 8 }} />;
  };

  return (
    <View style={styles.main}>
      <FlatList
        data={allNoteList}
        renderItem={renderItem}
        style={styles.listSty}
        ItemSeparatorComponent={itemSeparatorComponent}
        keyExtractor={(item, index) => `${item.id}-${index}`}
      />
    </View>
  );
};
export default NoteList;
const styles = StyleSheet.create({
  main: { flex: 1 },
  gameItemSty: {
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 6,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  listSty: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
});
