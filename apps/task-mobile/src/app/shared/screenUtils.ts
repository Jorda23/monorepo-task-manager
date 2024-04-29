import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const isMobileSmall = screenHeight <= 700;
const isTablet = screenWidth >= 600; 

export { screenHeight, screenWidth, isMobileSmall, isTablet };
