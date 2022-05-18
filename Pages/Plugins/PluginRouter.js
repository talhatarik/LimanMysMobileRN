import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Plugin from './Plugin'
import AddPlugin from './AddPlugin'


const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator initialRouteName="Plugin" headerMode="none">
                <Stack.Screen
                    name="Plugin"
                    getComponent={() => Plugin}
                />
          <Stack.Screen
            name="AddPlugin"
            getComponent={() => AddPlugin}
          />
            </Stack.Navigator>

    );
}



