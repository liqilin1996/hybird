import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';

const typeList = [
  {
    label: '热销排行',
    icon: require('../../../assets/img/home/icon_home_hot.png'),
  },
  {
    label: '清仓秒杀',
    icon: require('../../../assets/img/home/icon_home_seckill.png'),
  },
  {
    label: '新品上架',
    icon: require('../../../assets/img/home/icon_home_new.png'),
  },
  {
    label: '绿色有机',
    icon: require('../../../assets/img/home/icon_home_green.png'),
  },
  {
    label: '日常百货',
    icon: require('../../../assets/img/home/icon_home_cargo.png'),
  },
  {
    label: '视频推荐',
    icon: require('../../../assets/img/home/icon_home_video.png'),
  },
  {
    label: '爱心传递',
    icon: require('../../../assets/img/home/icon_home_love.png'),
  },
  {
    label: '尊享会员',
    icon: require('../../../assets/img/home/icon_home_vip.png'),
  },
  {
    label: '每日签到',
    icon: require('../../../assets/img/home/icon_home_signin.png'),
  },
  {
    label: '联系我们',
    icon: require('../../../assets/img/home/icon_home_contact.png'),
  },
];

const HomeClassify = () => {
  return (
    <View style={styles.listContent}>
      {typeList.map((item, index) => (
        <View style={styles.listItem} key={index}>
          <Image source={item.icon} style={styles.itemIcon} />
          <Text>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};
export default HomeClassify;
const styles = StyleSheet.create({
  listContent: {
    paddingVertical: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  listItem: {
    width: '20%',
    alignItems: 'center',
  },
  itemIcon: {
    width: 40,
    height: 40,
  },
});
