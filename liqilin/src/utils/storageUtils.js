/* eslint-disable no-bitwise */
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 存入便签数据
 * @param {*} value
 */
export const setStorage = async (value) => {
  try {
    const noteListData = await getStorage();
    const jsonValue = JSON.stringify([...noteListData, value]);
    await AsyncStorage.setItem('noteList', jsonValue);
  } catch (e) {
    console.log('saving error', e);
  }
};

/**
 * 取出便签数据
 */
export const getStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('noteList');
    return JSON.parse(value) || [];
  } catch (e) {
    return [];
  }
};

/**
 * 更新/删除某一项
 * @param {*} id 项的id
 */
export const changeStorageItem = async (data, key) => {
  const list = await getStorage();
  if (list && list.length) {
    const filterList = list.map((item) => {
      if (key === 'delete') {
        if (item.id === data) {
          item.isDel = true;
        }
      } else if (key === 'update' && item.id === data.id) {
        item = data;
      }
      return item;
    });

    try {
      await AsyncStorage.setItem('noteList', JSON.stringify(filterList));
    } catch (error) {
      console.log('save error');
    }
  }
};

/**
 * 生成唯一id
 * @returns
 */
export const getuuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    })
    .toUpperCase();
};
