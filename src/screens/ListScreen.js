import * as React from 'react';
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
import {useRef, useState} from 'react';

export function ListScreen({navigation, index, setIndex, route}) {
  const [transitionEnded, setTransitionEnded] = useState(false);
  const offset = route?.params?.offset;
  const cardOffset = offset - Spacings.s16 - index * (215 + Spacings.s16);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const cardTranslateY = useRef(new Animated.Value(cardOffset)).current;

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionEnd', e => {
      setTransitionEnded(true);
      // Do something
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(cardTranslateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });

    return unsubscribe;
  }, [navigation, fadeAnim, cardTranslateY]);

  React.useEffect(() => {
    if (transitionEnded) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(cardTranslateY, {
        toValue: cardOffset,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        navigation.goBack();
      });
    }
  }, [index]);

  const onCardPress = cardIndex => {
    if (index === cardIndex) {
      navigation.goBack();
    } else {
      setIndex(cardIndex);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Animated.View style={{opacity: fadeAnim}}>
        <View style={{height: Spacings.s16}} />
        <Text style={[styles.title]}>Cards List</Text>
        <View style={{height: Spacings.s16}} />
      </Animated.View>
      <Animated.View
        style={{
          padding: Spacings.s16,
          // transform: [{translateY: cardOffset}],
          transform: [{translateY: cardTranslateY}],
        }}>
        {cards.map((item, cardIndex) => (
          <Animated.View
            key={item.subtitle}
            style={{opacity: cardIndex === index ? 1 : fadeAnim}}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    lineHeight: 24,
    color: '#252525',
    paddingLeft: Spacings.s16,
  },
});
