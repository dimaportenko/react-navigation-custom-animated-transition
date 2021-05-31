import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ExpandableCard} from '../components/ExpandableCard';
import {Spacings} from '../utils/spacing';
import {ImageCard} from '../components/ImageCard';
import {AvailableCardsButton} from '../components/AvailableCardsButton';
import {MenuButtons} from '../components/MenuButtons';

export function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ExpandableCard />
      <View style={{height: Spacings.s24}} />
      <View>
        <Text style={styles.eventCardTitle}>Selected Card</Text>
        <View style={{height: Spacings.s16}} />

        <ImageCard source={require('../../assets/images/1.jpg')} />
        <View style={{height: Spacings.s16}} />

        <AvailableCardsButton
          onPress={() => {
            navigation.navigate('List');
          }}
        />
        <View style={{height: Spacings.s16}} />

        <MenuButtons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacings.s16,
  },
  card: {
    backgroundColor: 'black',
    height: 215,
    borderRadius: 20,
    overflow: 'hidden',
  },
  date: {
    color: 'white',
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 7,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    overflow: 'hidden',
  },
  dateWrap: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardImage: {
    ...StyleSheet.absoluteFillObject,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    position: 'absolute',
    bottom: 0,
    left: 16,
  },
  eventTitle: {
    color: '#000',
    fontSize: 16,
    lineHeight: 20,
  },
  eventCardTitle: {
    color: '#000',
    fontSize: 20,
    lineHeight: 24,
  },
});
