/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { changeStorageItem, getStorage } from '../../../../utils/storageUtils';
import SwipeableRow from '../../../../components/SwipeableRow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconFont from '../../../../components/iconfont';

const headeItems = [
  {
    label: '记账单',
    icon: require('../../../../assets/img/home/bill.png'),
  },
  {
    label: '写清单',
    routerName: 'EditNote',
    icon: require('../../../../assets/img/home/note.png'),
  },
  {
    label: '听写',
    icon: require('../../../../assets/img/home/dictation.png'),
  },
  {
    label: '画涂鸦',
    icon: require('../../../../assets/img/home/graffiti.png'),
  },
];
const AllNote = () => {
  const navigation = useNavigation();

  const [allNoteList, setAllNoteList] = useState([]);

  const handlerPress = (item) => {
    if (item.routerName) {
      navigation.navigate(item.routerName);
    }
  };

  const getData = () => {
    getStorage().then((res) => {
      const list = res?.filter((item) => !item.isDel) || [];
      setAllNoteList(list);
    });
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );

  // AsyncStorage.removeItem('noteList')

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
    return (
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
      <View style={styles.searchBar}>
        <View style={styles.searchContent}>
          <IconFont type={'\ue7b4'} style={styles.searchText} fontSize={28} />
          <Text style={styles.searchText}>搜索便签</Text>
        </View>
      </View>

      <View style={styles.nodeHeader}>
        {headeItems.map((item, index) => (
          <View style={styles.nodeHeaderItem} key={`headerItem${index}`}>
            <TouchableOpacity
              onPress={() => {
                handlerPress(item);
              }}>
              <View>
                <Image source={item.icon} style={styles.itemIcon} />
                <Text style={styles.itemText}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
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
export default AllNote;
const styles = StyleSheet.create({
  main: { flex: 1, backgroundColor: '#FFF' },
  nodeHeader: {
    flexDirection: 'row',
    paddingVertical: 6,
  },
  nodeHeaderItem: {
    flex: 0.25,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
  },
  itemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  listSty: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
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
