import { Dimensions, PixelRatio, StatusBar } from 'react-native';

export const PAGE_WIDTH = Dimensions.get('window').width;

export const PAGE_HEIGHT = Dimensions.get('window').height;

export const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const STATUSBAR_HEIGHT = StatusBar.currentHeight;

export const dpToPx = (dp) => PixelRatio.getPixelSizeForLayoutSize(dp);

// 只有竖屏模式，所以可以只获取一次 width
// UI 默认给图是 640
const uiWidthPx = 640;

export function pxToDp(uiElementPx) {
  return (uiElementPx * PAGE_WIDTH) / uiWidthPx;
}
