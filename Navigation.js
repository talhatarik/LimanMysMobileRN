import * as React from 'react';
import {Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MainRouter from './Pages/Main/MainRouter'
import ServerRouter from './Pages/Server/ServerRouter'
import PluginRouter from './Pages/Plugins/PluginRouter'
import ApproveRouter from './Pages/Approve/ApproveRouter'
import UserRouter from './Pages/Users/UserRouter'

const Tab = createBottomTabNavigator();

export default function App() {


  return (
<NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              return (focused ? <Image source={require('./Images/Menu/dashboard2.png')} style={{width:25,height:25}} /> :  <Image source={require('./Images/Menu/dashboard1.png')}  style={{width:25,height:25}} />);
            }
            else if (route.name === 'Server') {
              return (focused ? <Image source={require('./Images/Menu/network2.png')} style={{width:25,height:25,marginTop:2}} /> :  <Image source={require('./Images/Menu/network1.png')}  style={{width:25,height:25,marginTop:2}} />);
            }
            else if (route.name === 'Plugin') {
              return (focused ? <Image source={require('./Images/Menu/shop2.png')} style={{width:25,height:25,marginTop:2}} /> :  <Image source={require('./Images/Menu/shop1.png')}  style={{width:25,height:25,marginTop:2}} />);
            }
            else if (route.name === 'Users') {
              return (focused ? <Image source={require('./Images/Menu/users2.png')} style={{width:25,height:25,marginTop:2}} /> :  <Image source={require('./Images/Menu/users1.png')}  style={{width:25,height:25,marginTop:2}} />);
            }
            else if (route.name === 'Approve') {
              return (focused ? <Image source={require('./Images/Menu/check1.png')} style={{width:25,height:25,marginTop:2}} /> :  <Image source={require('./Images/Menu/check2.png')}  style={{width:25,height:25,marginTop:2}} />);
            }
          },
        })}
        tabBarOptions={{
          header: {
            visible: false,
          },
          showLabel:false,
          style: {
            borderTopColor:'#f6f6f6',
            backgroundColor: '#f6f6f6',
          },
          labelStyle:{
            color:'#000',
            fontSize:15,
            fontFamily:'Poppins-Regular'
          }
        }}
      >
        <Tab.Screen name="Main" component={MainRouter} />
        <Tab.Screen name="Server" component={ServerRouter} />
        <Tab.Screen name="Plugin" component={PluginRouter} />
        <Tab.Screen name="Users" component={UserRouter} />
        <Tab.Screen name="Approve" component={ApproveRouter} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
