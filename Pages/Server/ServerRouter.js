import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Server from './Server'
import ServerDetail from './ServerDetail'
import AddPluginToServer from './AddPluginToServer'


const Stack = createStackNavigator();

export default function App() {
    return (
        <Stack.Navigator initialRouteName="Server" headerMode="none">
                <Stack.Screen
                    name="Server"
                    getComponent={() => Server}
                />
          <Stack.Screen
            name="ServerDetail"
            getComponent={() => ServerDetail}
          />
          <Stack.Screen
            name="AddPluginToServer"
            getComponent={() => AddPluginToServer}
          />
            </Stack.Navigator>

    );
}



