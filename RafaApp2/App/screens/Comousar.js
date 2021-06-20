import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontSize: 26,
    color: colors.text
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
      <Text style={styles.text}>Como Usar</Text>

      <View style={styles.separator} />

      <Text style={styles.text}>Olá</Text>
    </SafeAreaView>
  );
};