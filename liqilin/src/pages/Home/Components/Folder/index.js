import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getStorage } from '../../../../utils/storageUtils';
import IconFont from '../../../../components/iconfont';

const listCof = [
  {
    name: '便签',
    key: 'nodeNum',
    routeName: 'NoteFileList',
    icon: '\ue642',
  },
  {
    name: '最近删除',
    key: 'delNum',
    routeName: 'DeleteFileList',
    icon: '\ue622',
  },
];

const Folder = () => {
  const navigation = useNavigation();

  const [nodeInfo, setNodeInfo] = useState({ delNum: 0, nodeNum: 0 });

  const handlerPress = (item) => {
    if (item.routeName) {
      navigation.navigate(item.routeName);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getStorage().then((res) => {
        if (res && res.length) {
          let delNum = 0;
          let nodeNum = 0;
          res.forEach((item) => {
            if (item.isDel) {
              delNum += 1;
            } else {
              nodeNum += 1;
            }
          });
          setNodeInfo({ delNum, nodeNum });
        }
      });
    }, []),
  );

  return (
    <View style={styles.main}>
      <View style={styles.listContent}>
        {listCof.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              handlerPress(item);
            }}>
            <View style={styles.listItem}>
              <View style={styles.flexRow}>
                <IconFont type={item.icon} style={styles.iconSty} />
                <Text style={styles.listItemName}>{item.name}</Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={styles.itemNum}>{nodeInfo[item.key]}</Text>
                <IconFont type={'\ue743'} style={styles.iconSty} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default Folder;
const styles = StyleSheet.create({
  main: { flex: 1 },
  nodeHeader: {
    flexDirection: 'row',
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
  },
  listSty: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  gameItemSty: {
    backgroundColor: '#dfdfdf',
    padding: 8,
    borderRadius: 6,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
  },
  listContent: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 22,
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSty: {
    fontSize: 22,
    color: '#aaa',
    marginHorizontal: 6,
  },
  listItemName: {
    fontSize: 16,
    color: '#222',
    marginLeft: 6,
  },
  itemNum: {
    color: '#aaa',
  },
});
