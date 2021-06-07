import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  useWindowDimensions,
} from 'react-native';
import {ExpandableCard} from '../components/ExpandableCard';
import {Spacings} from '../utils/spacing';
import {ImageCard} from '../components/ImageCard';
import {AvailableCardsButton} from '../components/AvailableCardsButton';
import {MenuButtons} from '../components/MenuButtons';
import {cards} from '../data/cards';
import {useCardAnimation} from '@react-navigation/stack';

export function HomeScreen({navigation, index, setIndex}) {
  const {next} = useCardAnimation();
  const {height} = useWindowDimensions();
  const [cardOffset, setCardOffset] = useState(0);
  const [bottomOffset, setBottomOffset] = useState(0);

  const translateYUp =
    next?.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -cardOffset],
    }) ?? 0;

  const translateYDown =
    next?.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, bottomOffset],
    }) ?? 0;

  const opacity =
    next?.progress.interpolate({
      inputRange: [0.99, 1],
      outputRange: [1, 0],
    }) ?? 1;

  const onExpandableCardLayout = event => {
    const cardHeight = event.nativeEvent.layout.height;
    setCardOffset(
      cardHeight + Spacings.s16 + Spacings.s24 + Spacings.s24 + Spacings.s16,
    );
  };

  const onLayoutDownOffset = event => {
    setBottomOffset(height - event.nativeEvent.layout.y);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{transform: [{translateY: translateYUp}]}}>
        <ExpandableCard onLayout={onExpandableCardLayout} />
        <View style={{height: Spacings.s24}} />
        <Text style={styles.eventCardTitle}>Selected Card</Text>
        <View style={{height: Spacings.s16}} />
      </Animated.View>
      <View>
        <Animated.View style={{opacity}}>
          <ImageCard source={cards[index]?.url} />
        </Animated.View>
        <Animated.View style={{transform: [{translateY: translateYDown}]}}>
          <View style={{height: Spacings.s16}} onLayout={onLayoutDownOffset} />

          <AvailableCardsButton
            onPress={() => {
              navigation.navigate('List', {
                offset: cardOffset,
              });
            }}
          />
          <View style={{height: Spacings.s16}} />

          <MenuButtons />
        </Animated.View>
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
    lineHeight: Spacings.s24,
  },
});
