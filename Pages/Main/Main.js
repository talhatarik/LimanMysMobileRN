import React, {Component } from "react";
import { View, Dimensions, Animated, Image, SafeAreaView,TouchableOpacity,ScrollView, Text } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const window = Dimensions.get('window');


export default class Main extends Component {

    constructor(props) {
    super(props);
        this.state = {
        };
    }

    render() {
        return (
          <View style={{width:window.width,marginTop:global.statusBarHeight,height:window.height,alignItems:'center',backgroundColor:'#f1f1f1'}}>
            <View style={{width:window.width,height:45}}>
              <Image source={require('../../Images/logo.png')} style={{width:40,height:40,marginLeft:20,borderRadius:15}} />
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Notification")}} style={{width:30,height:30,position:'absolute',right:20,top:5}}><Image source={require('../../Images/Menu/bell.png')} style={{width:30,height:30}} />
              <View style={{position:'absolute',right:-2,top:-5,width:15,height:15,backgroundColor:'red',borderRadius:90}}></View>
              </TouchableOpacity>
              </View>
            <ScrollView  style={{width:window.width}}>
                  <Text style={{fontSize:25,marginLeft:20,marginRight:20,marginTop:10,fontFamily:'Poppins-Regular',color:'#1a1a1a'}}>Merhaba,</Text>
                  <Text style={{fontSize:18,marginLeft:20,marginRight:20,fontFamily:'Poppins-Bold',color:'#1a1a1a'}}>LİMAN MYS'YE HOŞ GELDİNİZ</Text>

                  <View style={{width:window.width-40,marginLeft:20,marginRight:20,marginTop:20}}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Server")}}>
                    <LinearGradient colors={['#08699f','#0082c8']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  style={{borderRadius:10,height:200,zIndex:1,top:0,justifyContent:'flex-end'}} >
                      <View style={{position:'absolute',top:30,left:40,bottom:30}}>
                        <Text style={{fontSize:60,fontFamily:'Poppins-Bold',color:'#fff'}}>3</Text>
                        <Text style={{width:window.width/3,fontSize:18,fontFamily:'Poppins-Medium',color:'#fff'}}>Limandaki Sunucu Sayısı</Text>
                      </View>
                      <Image source={require('../../Images/srv.png')} style={{width:100,height:100,position:'absolute',right:40,top:50,bottom:50}} />
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Plugin")}}>
                    <LinearGradient colors={['#ff9966','#ff5e62']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  style={{borderRadius:10,marginTop:25,height:200,zIndex:1,top:0,justifyContent:'flex-end'}} >
                      <View style={{position:'absolute',top:30,left:40,bottom:30}}>
                        <Text style={{fontSize:60,fontFamily:'Poppins-Bold',color:'#fff'}}>4</Text>
                        <Text style={{width:window.width/3,fontSize:18,fontFamily:'Poppins-Medium',color:'#fff'}}>Limandaki Eklenti Sayısı</Text>
                      </View>
                      <Image source={require('../../Images/plugin.png')} style={{width:100,height:100,position:'absolute',right:40,top:50,bottom:50}} />
                    </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Users")}}>
                    <LinearGradient colors={['#1D976C','#93F9B9']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  style={{borderRadius:10,marginTop:25,height:200,zIndex:1,top:0,justifyContent:'flex-end'}} >
                      <View style={{position:'absolute',top:30,left:40,bottom:30}}>
                        <Text style={{fontSize:60,fontFamily:'Poppins-Bold',color:'#fff'}}>40</Text>
                        <Text style={{width:window.width/2-50,fontSize:18,fontFamily:'Poppins-Medium',color:'#fff'}}>Limandaki Kullanıcı Sayısı</Text>
                      </View>
                      <Image source={require('../../Images/users.png')} style={{width:100,height:100,position:'absolute',right:40,top:50,bottom:50}} />
                    </LinearGradient>
                    </TouchableOpacity>

                    <View style={{width:window.width,height:200}}></View>
                  </View>
            </ScrollView>
          </View>
        )
    }
}
