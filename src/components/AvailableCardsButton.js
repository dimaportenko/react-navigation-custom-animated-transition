/**
 * @flow
 * Created by Dima Portenko on 31.05.2021
 */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Spacings} from '../utils/spacing';
import {cards} from '../data/cards';
import ArrowRightIcon from './svg/ArrowRightIcon';

type AvailableCardsButtonProps = {
  onPress(): void,
};

export const AvailableCardsButton = ({
  onPress,
}: AvailableCardsButtonProps): React$Node => {
  return (
    <View>
      <View style={styles.line2} />
      <TouchableOpacity onPress={onPress}>
        <View style={{height: Spacings.s16}} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.eventCardTitle}>See Available Cards</Text>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text style={styles.moreEventsTitle}>{`${
              cards?.length ?? 0
            } Cards`}</Text>
            <View style={{width: Spacings.s8}} />
            <ArrowRightIcon />
          </View>
        </View>
        <View style={{height: Spacings.s16}} />
      </TouchableOpacity>
      <View style={styles.line2} />
    </View>
  );
};

const styles = StyleSheet.create({
  eventCardTitle: {
    color: '#000',
    fontSize: 20,
    lineHeight: 24,
  },
  line2: {
    backgroundColor: 'rgba(204, 204, 204, 0.45)',
    height: 1,
    width: '100%',
    marginVertical: 8,
  },
  moreEventsTitle: {
    color: '#a4a4a4',
    fontSize: 13,
    lineHeight: 16,
  },
});
