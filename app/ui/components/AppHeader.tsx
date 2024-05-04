import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppHeader():  React.JSX.Element {
  return (
    <View>
      <Text style={styles.header}>Peteca2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    fontWeight:'bold',
    fontSize:25,
    color: 'coral',
  }
})
