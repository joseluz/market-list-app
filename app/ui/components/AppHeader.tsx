import React from 'react';
import { Text, View } from 'react-native';

export default function AppHeader():  React.JSX.Element {
  return (
    <View className="bg-violet-500 px-10 py-4 flex items-center">
      <Text className="font-bold text-[30] color-white text-xl">Lista de Compra</Text>
    </View>
  );
}