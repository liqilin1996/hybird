import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {pxToDp} from '../../components/styleUtils';
const Detail = (props) => {
  const {params} = props.route;
  return (
    <View style={styles.main}>
      <View style={styles.listitemContent}>
        <Image source={{uri: params.img}} style={styles.listItemImg} />
        <Text style={styles.name}>{params.name}</Text>
        <View style={styles.priceSty}>
          <Text style={styles.sale}>{params.sale}</Text>
          <Text style={styles.pirce}>{params.pirce}</Text>
        </View>
        <View style={styles.vipView}>
          <Text style={styles.vipPrice}>会员价￥{params.vipPrice}</Text>
        </View>
      </View>
    </View>
  );
};
export default Detail;
const styles = StyleSheet.create({
  main: {flex: 1},
  listitemContent: {
    padding: 5,
    borderColor: '#acacac',
    borderRadius: 4,
  },
  name: {
    paddingLeft: 10,
    fontSize: 14,
  },
  listItemImg: {
    width: pxToDp(160),
    height: pxToDp(220),
    alignSelf: 'center',
  },
  priceSty: {
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  sale: {
    fontSize: 16,
    color: 'red',
    marginRight: 6,
    paddingVertical: 2,
  },
  pirce: {
    fontSize: 12,
    color: '#AAA',
    textDecorationLine: 'line-through',
  },
  vipView: {alignSelf: 'flex-start'},
  vipPrice: {
    marginLeft: 10,
    fontSize: 12,
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 2,
    color: 'red',
    borderRadius: 2,
  },
});
