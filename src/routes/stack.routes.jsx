import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlatListScreen from '../screens/FlatListScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='FlatlistScreenHot'>
            <Stack.Screen name="FlatList" component={FlatListScreen} />
            <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
        </Stack.Navigator>
    )
}

