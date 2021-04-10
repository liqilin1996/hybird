/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View, I18nManager } from 'react-native';
import { RectButton, Swipeable } from 'react-native-gesture-handler';

export default class SwipeableRow extends Component {
  renderRightActions = (progress) => (
    <View
      style={{
        width: 90,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      }}>
      {this.props?.options?.map((item, index) => (
        <Animated.View
          style={{ flex: 1, transform: [{ translateX: 0 }] }}
          key={`item-animated${index}`}>
          <RectButton
            style={[styles.rightAction, { backgroundColor: item.color }]}
            onPress={() => {
              item.callback();
              this.close();
            }}>
            <Text style={styles.actionText}>{item.name}</Text>
          </RectButton>
        </Animated.View>
      ))}
    </View>
  );
  updateRef = (ref) => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };
  render() {
    const { children } = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={30}
        rightThreshold={40}
        renderRightActions={this.renderRightActions}>
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
