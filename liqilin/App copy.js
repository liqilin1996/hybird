/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Animated, Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {CollapsibleHeaderTabView} from 'react-native-scrollable-tab-view-collapsible-header';
import ScrollViewPage from './src/ScrollViewPage';
import LinearGradient from 'react-native-linear-gradient';
import Tabbar from './src/Tabbar';

const HEAD_HEIGHT = 430;

export const themeColor = '#670b43';

export const gameDetail = {
  icon:
    'https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/img/50c47b38e32168964a1bfff978e9570f/50c47b38e32168964a1bfff978e9570f.png',
  gameName: '阴阳师',
  score: '5.0',
  size: '1.8GB',
  installCount: 5400,
};

export default class ExampleBasic extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollValue: new Animated.Value(0),
      backgroundAnimated: new Animated.Value(0),
    };
  }

  renderScrollHeader = () => {
    return (
      <View
        style={{
          height: HEAD_HEIGHT,
          position: 'relative',
        }}>
        <LinearGradient colors={['#00000000', themeColor]} style={{flex: 1}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            }}>
            <Image source={{uri: gameDetail.icon}} style={styles.gameIcon} />
            <Text style={styles.gameName}>{gameDetail.gameName}</Text>
            <View style={styles.gameBasedata}>
              <Text style={styles.gameTag}>{gameDetail.score}分</Text>
              <Text style={styles.gameTag}>{gameDetail.size}</Text>
              <Text style={styles.gameTag}>{gameDetail.installCount}</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  handleScorll = (scrollValue) => {
    this.setState({scrollValue});
  };

  renderTabBar = (props) => {
    return <Tabbar {...props} />;
  };

  renderNavbar = () => {
    const {scrollValue} = this.state;
    return (
      <Animated.View
        style={{
          paddingTop: StatusBar.currentHeight,
          backgroundColor: 'transparent',
          /* backgroundColor: themeColor,
          opacity: scrollValue.interpolate({
            inputRange: [HEAD_HEIGHT / 2, HEAD_HEIGHT],
            outputRange: [0, 1],
          }), */
        }}>
        <Text>header</Text>
        <Text>header</Text>
      </Animated.View>
    );
  };
  render() {
    const {scrollValue} = this.state;
    return (
      <View style={styles.main}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="#00000000"
        />
        {this.renderNavbar()}
        {/* 背景图 */}
        <Animated.Image
          source={{
            uri:
              'https://yys-fans.fp.ps.netease.com/file/60456c3f143cfa1333203ec4GcoWo8Rt03?fop=imageView/2/w/845/h/604',
          }}
          style={{
            width: '100%',
            height: HEAD_HEIGHT + 100,
            position: 'absolute',
            backgroundColor: '#000000ff',
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,
            transform: [
              {
                translateY: scrollValue.interpolate({
                  inputRange: [0, HEAD_HEIGHT],
                  outputRange: [0, -50],
                }),
              },
            ],
          }}
        />
        <CollapsibleHeaderTabView
          makeHeaderHeight={() => HEAD_HEIGHT}
          makeScrollTrans={this.handleScorll}
          renderTabBar={this.renderTabBar}
          renderScrollHeader={this.renderScrollHeader}>
          <ScrollViewPage
            key={'ScrollViewPage111'}
            tabLabel={'详情'}
            index={0}
          />
          <ScrollViewPage
            key={'ScrollViewPage222'}
            tabLabel={'活动'}
            index={1}
          />
          <ScrollViewPage
            key={'ScrollViewPage333'}
            tabLabel={'交易'}
            index={2}
          />
        </CollapsibleHeaderTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: themeColor,
  },
  headerStyle: {
    width: '100%',
    height: HEAD_HEIGHT,
  },
  tabbarStyle: {
    height: 60,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: '#fff',
  },
  gameIcon: {
    width: 80,
    height: 80,
  },
  gameName: {
    marginTop: 6,
    paddingVertical: 6,
    fontSize: 24,
    color: '#FFF',
    fontWeight: '700',
  },
  gameBasedata: {
    flexDirection: 'row',
  },
  gameTag: {
    fontSize: 14,
    color: '#FFFFFF',
    marginHorizontal: 4,
  },
});
