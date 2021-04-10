import {Dimensions, PixelRatio} from 'react-native';
export const PAGE_WIDTH = Dimensions.get('window').width;
export const PAGE_HEIGHT = Dimensions.get('window').height;

export const dpToPx = (dp) => PixelRatio.getPixelSizeForLayoutSize(dp);

// UI 默认给图是 640
const uiWidthPx = 640;

export function pxToDp(uiElementPx) {
  return (uiElementPx * PAGE_WIDTH) / uiWidthPx;
}
