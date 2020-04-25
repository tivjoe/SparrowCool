import React from 'react';
import { Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { NavigationBar } from '../../index'

/**
 * @file 可返回导航栏
 */
export interface Props {
    style?: StyleProp<ViewStyle>;
    title?: string;
    titleStyle?: StyleProp<ViewStyle>;
    backIconComponent: React.ReactNode;
    onPressBack: () => void;
};

export const NavigationBackBar: React.FC<Props> = (props) => {
    return (
        <NavigationBar
            style={[props.style]}
            leftComponent={
                <TouchableOpacity onPress={props.onPressBack} hitSlop={{top: 44, left: 44, bottom: 44, right: 44}} >
                    {props.backIconComponent}
                </TouchableOpacity>
            }
            centerComponent={<Text style={[styles.title, props.titleStyle]} numberOfLines={1} ellipsizeMode='tail' >{props.title}</Text>}
        />
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight:"bold",
    }
});