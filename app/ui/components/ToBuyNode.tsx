import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default function ToBuyNode({ item, onComplete }): React.JSX.Element {
    return (
        <TouchableOpacity onPress={()=> onComplete(item.key)}>
            <View className='py-2 px-4 bg-orange-100 rounded border border-orange-500 border-dotted mt-1 '>
                <Text className='font-medium text-lg'>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}