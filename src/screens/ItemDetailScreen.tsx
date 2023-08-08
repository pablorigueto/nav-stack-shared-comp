import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ItemDetailScreen = ({ route, navigation }) => { // Add 'navigation' to the destructured props
  const { itemId } = route.params;

  return (
    <View style={{ padding: 16 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <Text>Item Detail Screen</Text>
      <Text>Item ID: {itemId}</Text>
      {/* Display the rest of the item details here */}
    </View>
  );
};

export default ItemDetailScreen;
