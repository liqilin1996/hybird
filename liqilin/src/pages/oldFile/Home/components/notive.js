import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';
import {pxToDp} from '../../../components/styleUtils';
const Notice = () => {
  return (
    <View style={styles.main}>
      <ImageBackground
        source={require('../../../assets/img/home/bg_home_card.png')}
        style={styles.noticeBg}
        resizeMode="contain">
        <Text style={styles.header}>山区白菜紧急出售</Text>
        <View style={styles.leftItem}>
          <Image
            source={require('../../../assets/img/home/img_home_opinion.png')}
            style={styles.leftItemImg}
          />
          <View>
            <Text style={styles.itemTitle}>请您指导</Text>
            <TouchableOpacity>
              <Text style={styles.btnSty}>前往</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rightItem}>
          <Image
            source={require('../../../assets/img/home/img_home_newbie.png')}
            style={styles.leftItemImg}
          />
          <View>
            <Text style={styles.itemTitle}>请您指导</Text>
            <TouchableOpacity>
              <Text style={styles.btnSty}>前往</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Notice;
const styles = StyleSheet.create({
  main: {paddingHorizontal: 8},
  noticeBg: {
    height: pxToDp(248),
    width: '100%',
  },
  header: {
    position: 'absolute',
    top: pxToDp(40),
    left: pxToDp(140),
    fontSize: 14,
    color: '#bbb',
  },
  leftItem: {
    position: 'absolute',
    top: pxToDp(130),
    left: pxToDp(60),
    flexDirection: 'row',
  },
  leftItemImg: {
    width: pxToDp(80),
    height: pxToDp(80),
    marginRight: pxToDp(16),
  },
  rightItem:{
    position: 'absolute',
    top: pxToDp(130),
    right: pxToDp(60),
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  btnSty: {
    backgroundColor: '#ee5e1f',
    marginTop: 6,
    textAlign: 'center',
    height: 20,
    fontSize: 12,
    lineHeight: 20,
    borderRadius: 10,
    color: '#FFF',
  },
});
