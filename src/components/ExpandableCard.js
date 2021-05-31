/**
 * @flow
 * Created by Dima Portenko on 30.05.2021
 */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import ArrowUp from './svg/ArrowUp';
import ArrowDown from './svg/ArrowDown';

type ExpandableCardProps = {};

export const ExpandableCard = (props: ExpandableCardProps): React$Node => {
  const [expanded, setExpanded] = useState(false);

  const renderExpandButton = () => {
    return (
      <View style={{position: 'absolute', bottom: 16, right: 16}}>
        <TouchableOpacity
          eventTitle="Reload User Data"
          eventParams={{title: 'Reload User Data pressed'}}
          onPress={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut,
            );
            setExpanded(!expanded);
          }}>
          {expanded ? <ArrowUp /> : <ArrowDown />}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.userCardContainer}>
        <View style={styles.titleWrap}>
          <View>
            <Text style={styles.welcomeText}>Welcome to the Tutorial</Text>
          </View>
        </View>
        <View style={styles.line} />
        <Text style={styles.cardDetails}>
          {expanded
            ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'}
        </Text>
        {renderExpandButton()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleWrap: {flexDirection: 'row', justifyContent: 'space-between'},
  userCardContainer: {
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 16,
    minHeight: 150,
    overflow: 'hidden',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 22,
    lineHeight: 33,
    maxWidth: Dimensions.get('window').width - 96,
  },
  cardDetails: {
    color: '#A4A4A4',
    fontSize: 13,
    lineHeight: 21,
  },
  purchaserCardDetails: {
    color: '#A4A4A4',
    fontSize: 14,
    lineHeight: 23,
  },
  line: {
    backgroundColor: 'rgba(196, 196, 196, 0.2)',
    height: 1,
    width: '100%',
    marginVertical: 8,
  },
});
