import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import User from './User'


const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator initialRouteName="User" headerMode="none">
                <Stack.Screen
                    name="User"
                    getComponent={() => User}
                />
            </Stack.Navigator>

    );
}



