import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Animated, { FadeInLeft, FadeInDown } from 'react-native-reanimated';

const ItemDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={{ padding: 16 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Animated.Image sharedTransitionTag={`img_${item.photo}`} source={item.photo} style={{ width: '100%', height: 200 }} />

      <Animated.Text entering={FadeInLeft.duration(400).delay(500)}>Item Detail Screen</Animated.Text>
      <Animated.Text entering={FadeInDown.duration(400).delay(600)}>Item ID: {item.id}</Animated.Text>

    </View>
  );
};

export default ItemDetailScreen;
