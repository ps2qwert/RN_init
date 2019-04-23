import {
    PixelRatio,
    TouchableWithoutFeedback,
    Platform,
    processColor,
    Dimensions
} from 'react-native';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
import { PropTypes } from 'react';

//const toPixels = PixelRatio.getPixelSizeForLayoutSize.bind(PixelRatio);
const pix = PixelRatio.get();

const defultWidth = 375;
const defultHeight = 667;

//换算 字体，尺寸，行距
function toDips(px) {


  // if (pix == 2) {
  //     return px * screenWidth / defultWidth
  // }

  return px*pix/4;

}



//fontSize, left, right, width   使用对象
function toDipsWidth(px) {
    return px * screenWidth / defultWidth;

}

function toDipsLineHeight(px){
    if(Platform.OS == 'ios'){
        return (px + 3) * screenWidth / defultWidth;
    }else{
        return px * screenWidth / defultWidth;
    }
}

//top, bottom, height   使用对象
function toDipsHeight(px) {
  return px * screenWidth / defultWidth;
}



export {
    toDips,
    toDipsWidth,
    toDipsHeight,
    toDipsLineHeight
};