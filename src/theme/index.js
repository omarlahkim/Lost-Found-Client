import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import merge from 'deepmerge';
import theme from './themes/theme1/light';

const Light = merge(PaperDefaultTheme, NavigationDefaultTheme);
const Dark = merge(PaperDarkTheme, NavigationDarkTheme);

const styles = merge(Light, theme);

export const Theme = styles;
