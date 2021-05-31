import * as React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Spacings} from '../utils/spacing';
import {cards} from '../data/cards';
import {ImageCard} from '../components/ImageCard';

export function ListScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{padding: Spacings.s16}}>
        <View style={{height: Spacings.s16}} />
        <Text style={styles.title}>Cards List</Text>
        <View style={{height: Spacings.s16}} />
        {cards.map((item, index) => (
          <View key={item.subtitle}>
            <ImageCard source={item.url} />
            <View style={{height: Spacings.s16}} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    lineHeight: 22,
    color: '#252525',
  },
});
