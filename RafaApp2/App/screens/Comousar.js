import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 26,
    color: colors.text,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20
  }
});

export default () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>
        Como Usar
        <Entypo name="heart" size={20} color={colors.red} /> 
      </Text>

      <View style={styles.separator} />

      <Text style={styles.text}>Olá</Text>
    </SafeAreaView>
  );
};