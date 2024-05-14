import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function ToBuyNode({ item, onComplete }): React.JSX.Element {
    return (
        <TouchableOpacity onPress={() => onComplete(item.key)}>
            <View className='py-2 px-4 bg-orange-100 rounded border border-orange-500 border-dotted mt-1 flex flex-row'>
                <BouncyCheckbox isChecked={item.isCompleted}
                    size={20}
                    onPress={() => onComplete(item.key)}>
                </BouncyCheckbox>
                <TextInput readOnly={item.isCompleted}
                    onChangeText={(val) => { item.name = val }}
                    className={`font-medium text-gray-600 text-lg w-full ${item.isCompleted ? 'line-through' : ''} `}>
                    {item.name}
                </TextInput>
            </View>
        </TouchableOpacity>
    );
}