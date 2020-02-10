import React from 'react';
import { Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { NavigationBar } from '../../SparrowCool'

/**
 * @file 可返回导航栏
 */
export interface Props {
    title?: string;
    titleStyle?: StyleProp<ViewStyle>;
    backIconComponent: React.ReactNode;
    onPressBack: () => void;
};

export const NavigationBackBar: React.FC<Props> = (props) => {
    return (
        <NavigationBar
            leftComponent={
                <TouchableOpacity onPress={props.onPressBack} >
                    {props.backIconComponent}
                </TouchableOpacity>
            }
            centerComponent={<Text style={[styles.title, props.titleStyle]} >{props.title}</Text>}
        />
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: "500",
    }
});