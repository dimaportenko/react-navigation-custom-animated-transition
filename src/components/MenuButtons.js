/**
 * @flow
 * Created by Dima Portenko on 31.05.2021
 */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Spacings} from '../utils/spacing';
import BarCodeIcon from './svg/BarCodeIcon';
import InfoCircleIcon from './svg/InfoCircleIcon';

type MenuButtonsProps = {};

export const MenuButtons = (props: MenuButtonsProps): React$Node => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.btn}>
        <BarCodeIcon />
        <View style={{height: Spacings.s8}} />
        <Text>Code</Text>
      </View>
      <View style={{width: Spacings.s16}} />
      <View style={styles.btn}>
        <InfoCircleIcon />
        <View style={{height: Spacings.s8}} />
        <Text>Info</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#0000001a',
    borderRadius: 20,
    marginBottom: 8,
    height: 120,
    flex: 1,
    backgroundColor: 'white',
  },
  floating: {
    borderWidth: 0,
    marginTop: -5,
    backgroundColor: 'white',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowColor: 'gray',
    shadowOpacity: 0.31,
    shadowRadius: 6,
    elevation: 2,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    lineHeight: 18,
  },
  logo: {},
});
