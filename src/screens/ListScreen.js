import React, {useEffect, useRef, useState, useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Animated,
} from 'react-native';
import {Spacings} from '../utils/spacing';
import {cards} from '../data/cards';
import {ImageCard} from '../components/ImageCard';
import {HeaderBackButton} from '@react-navigation/stack';

const CARD_HEIGHT = 215;

export function ListScreen({navigation, index, setIndex, route}) {
  const cardOffsetY =
    route?.params?.offset -
    Spacings.s16 -
    Spacings.s16 -
    Spacings.s16 -
    Spacings.s24 -
    (CARD_HEIGHT + Spacings.s16) * index;

  const opacity = useRef(new Animated.Value(0)).current;
  const cardOffset = useRef(new Animated.Value(cardOffsetY)).current;
  const [transitionEnded, setTransitionEnded] = useState(false);

  const goBack = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(cardOffset, {
      toValue: cardOffsetY,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      navigation.goBack();
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          onPress={goBack}
          tintColor="black"
          labelVisible={false}
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('transitionEnd', e => {
      // Do something
      setTransitionEnded(true);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(cardOffset, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (transitionEnded) {
      goBack();
    }
  }, [index]);

  const onCardPress = cardIndex => {
    if (cardIndex === index) {
      goBack();
    } else {
      setIndex(cardIndex);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{padding: Spacings.s16}}>
        <Animated.View style={{opacity}}>
          <View style={{height: Spacings.s16}} />
          <Text style={styles.title}>Cards List</Text>
          <View style={{height: Spacings.s16}} />
        </Animated.View>
        <Animated.View style={{transform: [{translateY: cardOffset}]}}>
          {cards.map((item, cardIndex) => (
            <Animated.View
              key={item.subtitle}
              style={{opacity: cardIndex === index ? 1 : opacity}}>
              <Pressable
                onPress={() => {
                  onCardPress(cardIndex);
                }}>
                <ImageCard source={item.url} />
              </Pressable>
              <View style={{height: Spacings.s16}} />
            </Animated.View>
          ))}
        </Animated.View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    lineHeight: Spacings.s24,
    color: '#252525',
  },
});
