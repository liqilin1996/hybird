import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {CollapsibleHeaderTabView} from 'react-native-scrollable-tab-view-collapsible-header';

import HomeHeader from './components/header';
import Notice from './components/notive';
import HomeClassify from './components/typeList';
import CommodityList from './components/commodityList';

import mockData from './mockData';
import {useState} from 'react';

const Home = () => {
  const [headerHeight, setheaderHeight] = useState(300);
  const getLayout = (e) => {
    const {height} = e.nativeEvent.layout;
    setheaderHeight(height);
  };
  const renderScrollHeader = () => {
    return (
      <View onLayout={getLayout}>
        <HomeHeader />
        <HomeClassify />
        <Notice />
      </View>
    );
  };
  return (
    <View style={styles.main}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#00000000"
      />

      <CollapsibleHeaderTabView
        tabBarActiveTextColor="#f33e06"
        tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
        makeHeaderHeight={() => headerHeight}
        renderScrollHeader={renderScrollHeader}>
        {mockData.map((item, index) => (
          <CommodityList
            key={`commodityItem${index}`}
            index={index}
            tabLabel={item.label}
            viewData={item.viewData}
          />
        ))}
      </CollapsibleHeaderTabView>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  main: {flex: 1},
  tabBarUnderlineStyle: {
    backgroundColor: '#f33e06',
  },
});
