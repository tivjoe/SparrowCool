import * as React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// screen
import HomeScreen from '../screen';
import AlertExample from '../screen/Alert';
import ImmersiveSafeAreaViewExample from '../screen/ImmersiveSafeAreaView';
import ImmersiveStatusBarExample from '../screen/ImmersiveStatusBar';
import LoadingExample from '../screen/Loading';
import NavigationBarExample from '../screen/NavigationBar';
import ScrollVaryNavbarExample from '../screen/ScrollVaryNavbar';
import SwitchExample from '../screen/Switch';

// 目录下
import { RootStackParamList } from './types';

/**
 * @file 路由
 */
const Stack = createStackNavigator<RootStackParamList>();

export const AppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={{
                header: () => null,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='AlertExample' component={AlertExample} />
            <Stack.Screen name='ImmersiveSafeAreaViewExample' component={ImmersiveSafeAreaViewExample} />
            <Stack.Screen name='ImmersiveStatusBarExample' component={ImmersiveStatusBarExample} />
            <Stack.Screen name='LoadingExample' component={LoadingExample} />
            <Stack.Screen name='NavigationBarExample' component={NavigationBarExample} />
            <Stack.Screen name='ScrollVaryNavbarExample' component={ScrollVaryNavbarExample} />
            <Stack.Screen name='SwitchExample' component={SwitchExample} />
        </Stack.Navigator>
    )
}
