import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
/**
 * @file 路由type
 */

/** 各个页面的params 类型 */
export type RootStackParamList = {
    HomeScreen: undefined; // 首页
    AlertExample: undefined;
    ImmersiveSafeAreaViewExample: undefined;
    ImmersiveStatusBarExample: undefined;
    LoadingExample: undefined;
    NavigationBarExample: undefined;
    ScrollVaryNavbarExample: undefined;
    SwitchExample: undefined;
};

/** 首页 */
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>;
