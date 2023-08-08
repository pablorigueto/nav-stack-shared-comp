import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const dataA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
  { id: '7', title: 'Item 7' },
  { id: '8', title: 'Item 8' },
  { id: '9', title: 'Item 9' },
  { id: '10', title: 'Item 10' },
  // Add more items here
];

const dataB = [
  { id: '11', title: 'Item 11' },
  { id: '21', title: 'Item 21' },
  { id: '31', title: 'Item 31' },
  { id: '41', title: 'Item 41' },
  { id: '51', title: 'Item 51' },
  { id: '61', title: 'Item 61' },
  { id: '71', title: 'Item 71' },
  { id: '81', title: 'Item 81' },
  { id: '91', title: 'Item 91' },
  { id: '101', title: 'Item 101' },
  // Add more items here
];

const FlatListScreen = ({ navigation }) => {
  console.log('navigation');
  console.log(navigation);
  const renderItem = ({ item }) => (
    console.log('item...:'),
    console.log(item),
    <TouchableOpacity
      onPress={() => navigation.navigate('ItemDetail', { itemId: item.id })}
    >
      <View style={{ padding: 16 }}>
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
