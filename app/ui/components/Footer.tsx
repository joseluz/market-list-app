import React from 'react';
import { Text, View } from 'react-native';

export default function Footer(): React.JSX.Element {
    return (
        <View className='sticky absolute bottom-0 h-14 w-full bg-gray-700'>
            <View className='flex flex-row justify-between items-center color-white px-10 h-full'>
                <Text className='color-white'>A</Text>
                <Text className='color-white'>B</Text>
                <Text className='color-white'>C</Text>
            </View>
        </View>
    );
}