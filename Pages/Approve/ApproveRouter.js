import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Approve from './Approve'


const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator initialRouteName="Approve" headerMode="none">
                <Stack.Screen
                    name="Approve"
                    getComponent={() => Approve}
                />
            </Stack.Navigator>

    );
}



