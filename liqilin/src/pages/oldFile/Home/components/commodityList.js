import * as React from 'react';
import {HPageViewHoc} from 'react-native-head-tab-view';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {pxToDp} from '../../../components/styleUtils';
import {useNavigation} from '@react-navigation/native';
const HFlatList = HPageViewHoc(FlatList);

const CommodityList = (props) => {
  const navigation = useNavigation();
  const {viewData} = props;

  const handlePress = (data) => {
    navigation.navigate('Detail', data);
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.listItem}>
        <TouchableOpacity
          onPress={() => {
            handlePress(item);
          }}>
          <View style={styles.listitemContent}>
            <Image source={{uri: item.img}} style={styles.listItemImg} />
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.priceSty}>
              <Text style={styles.sale}>{item.sale}</Text>
              <Text style={styles.pirce}>{item.pirce}</Text>
            </View>
            <View style={styles.vipView}>
              <Text style={styles.vipPrice}>会员价￥{item.vipPrice}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <HFlatList
      index={props.index}
      data={viewData}
      keyExtractor={(item, index) => `list-item-${index}`}
      renderItem={renderItem}
      numColumns={2}
      style={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CommodityList;

const styles = StyleSheet.create({
  listContent: {
    padding: 8,
  },
  listItem: {
    width: '50%',
    padding: 6,
  },
  listitemContent: {
    borderWidth: 1,
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
