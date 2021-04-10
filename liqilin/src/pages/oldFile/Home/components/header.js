import React from 'react';
import {StyleSheet, View, Text, ImageBackground, StatusBar} from 'react-native';

const HomeHeader = () => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../../assets/img/home/banner_home.png')}
        style={styles.homeBanner}
        resizeMode="contain">
        <View style={styles.search}>
          <View style={styles.searchInput}>
            <Text style={styles.placeholder}>请输入您要搜索的商品名称</Text>
            <Text style={styles.searchBtn}>搜索商品</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default HomeHeader;
const styles = StyleSheet.create({
  main: {backgroundColor: '#f85c2b'},
  homeBanner: {
    width: '100%',
    height: 230,
  },
  search: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: StatusBar.currentHeight,
    paddingHorizontal: '5%',
  },
  searchInput: {
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  searchBtn: {
    backgroundColor: '#d94b36',
    color: '#FFF',
    textAlign: 'center',
    height: 26,
    borderRadius: 14,
    paddingHorizontal: 6,
    lineHeight: 26,
  },
  placeholder: {
    color: '#ccc',
    flex: 1,
  },
});
