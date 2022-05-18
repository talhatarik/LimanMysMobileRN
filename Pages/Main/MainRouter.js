import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main'
import Notification from './Notification'


const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator initialRouteName="Main" headerMode="none">
                <Stack.Screen
                    name="Main"
                    getComponent={() => Main}
                />
          <Stack.Screen
            name="Notification"
            getComponent={() => Notification}
          />
            </Stack.Navigator>

    );
}



