import Toast from 'react-native-root-toast';

let toast;

// export const toastShort = (content) => {
//   if (toast !== undefined) {
//     Toast.hide(toast);
//   }
//   toast = Toast.show(content.toString(), {
//     duration: Toast.durations.SHORT,
//     position: Toast.positions.CENTER,
//     shadow: true,
//     animation: true,
//     hideOnPress: true,
//     delay: 0
//   });
// };

export const toastLong = (content) => {
  if (toast !== undefined) {
    Toast.hide(toast);
  }
  toast = Toast.show(content.toString(), {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM-55,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0
  });
};

export const toastBottom = (content) => {
  if (toast !== undefined) {
    Toast.hide(toast);
  }
  toast = Toast.show(content.toString(), {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM-55,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
};

export const toastShortBy = (content) => {
  if (toast !== undefined) {
    Toast.hide(toast);
  }
  toast = Toast.show(content.toString(), {
    duration: Toast.durations.SHORT,
    position: Toast.positions.CENTER,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
//   setTimeout(function () {
//     Toast.hide(toast);
// }, 1000);
};
