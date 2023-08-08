import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Animated, { SharedTransition, FadeInLeft, FadeInDown, withSpring } from 'react-native-reanimated';

const dataA = [
  { id: '1', title: 'Item 1', photo: require('../assets/foto1.jpeg') },
  { id: '2', title: 'Item 2', photo: require('../assets/foto2.jpeg') },
  { id: '3', title: 'Item 2', photo: require('../assets/foto5.jpeg') },
  // ... add more items
];

const dataB = [
  { id: '10', title: 'Item 10', photo: require('../assets/foto3.jpeg') },
  { id: '11', title: 'Item 11', photo: require('../assets/foto4.png') },
  { id: '12', title: 'Item 12', photo: require('../assets/foto6.jpeg') },
  // ... add more items
];

const transition = SharedTransition.custom((values) => {
  'worklet';
  return {
    height: withSpring(values.targetHeight),
    width: withSpring(values.targetWidth),
  };
});

const FlatListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ItemDetail', { item })}
    >
      <View style={{ padding: 16 }}>
          <Animated.Image
            sharedTransitionTag={`img_${item.photo}`}
            source={item.photo} style={{ width: 200, height: 200 }} />
          <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text>List A</Text>
      <FlatList
        data={dataA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />

      <Text>List B</Text>
      <FlatList
        data={dataB}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </View>
  );
};

export default FlatListScreen;
