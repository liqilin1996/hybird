import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconFont from '../components/iconfont';
import Home from '../pages/Home';
import Store from '../pages/Store';
import ShoppingCart from '../pages/ShoppingCart';
import My from '../pages/My';
import Member from '../pages/Member';
const ThemeConfig = {
  BtnBgColor: '#087aff',
  BtnBgDisabledColor: '#acacac',
  BtnTextColor: '#FFFFFF',
};

const Tab = createBottomTabNavigator();

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={`tabbarItem${index}`}
            style={{flex: 1}}>
            <View style={[styles.tabbarItem]}>
              <IconFont
                style={{
                  color: isFocused
                    ? ThemeConfig.BtnBgColor
                    : ThemeConfig.BtnBgDisabledColor,
                  fontSize: 24,
                }}
                type={'\ue816'}
              />
              <Text
                style={[
                  styles.tabbarText,
                  {
                    color: isFocused
                      ? ThemeConfig.BtnBgColor
                      : ThemeConfig.BtnBgDisabledColor,
                  },
                ]}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Tabbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        options={{tabBarLabel: '首页'}}
        component={Home}
      />
      <Tab.Screen
        name="Store"
        options={{tabBarLabel: '商城'}}
        component={Store}
      />
      <Tab.Screen
        name="Member"
        options={{tabBarLabel: '会员管理'}}
        component={Member}
      />
      <Tab.Screen
        name="ShoppingCart"
        options={{tabBarLabel: '购物车'}}
        component={ShoppingCart}
      />
      <Tab.Screen name="My" options={{tabBarLabel: '我的'}} component={My} />
    </Tab.Navigator>
  );
};

export default Tabbar;

const styles = StyleSheet.create({
  tabbarItem: {
    paddingVertical: 8,
    alignItems: 'center',
  },
  tabbarText: {
    textAlign: 'center',
    fontSize: 10,
  },
});
