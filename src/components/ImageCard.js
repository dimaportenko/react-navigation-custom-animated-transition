/**
 * @flow
 * Created by Dima Portenko on 31.05.2021
 */
import React from 'react';
import {View, Image, StyleSheet, ImageSourcePropType} from 'react-native';

type ImageCardProps = {
  source: ImageSourcePropType,
};

export const ImageCard = ({source}: ImageCardProps): React$Node => {
  return (
    <View style={styles.card}>
      <Image
        source={source}
        style={{width: '100%', height: '100%'}}
        resizeMode="stretch"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'black',
    height: 215,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
