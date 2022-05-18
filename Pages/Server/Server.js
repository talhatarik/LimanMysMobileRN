import React, {Component } from "react";
import { View, Dimensions, Animated, Image,Pressable, TouchableHighlight,TouchableOpacity,SafeAreaView,ScrollView, Text } from "react-native";
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
          isActive :1
        };
    }

    render() {
        return (
          <View style={{width:window.width,marginTop:global.statusBarHeight,height:window.height,alignItems:'center',backgroundColor:'#f1f1f1'}}>
            <View style={{width:window.width,height:45}}>
              <Image source={require('../../Images/logo.png')} style={{width:40,height:40,marginLeft:20,borderRadius:15}} />
              <TouchableOpacity style={{width:30,height:30,position:'absolute',right:20,top:5}}><Image source={require('../../Images/Menu/add.png')} style={{width:30,height:30}} />
              </TouchableOpacity>
              </View>
            <ScrollView  style={{width:window.width}}>
              <Text style={{fontSize:25,marginLeft:20,marginRight:20,marginTop:10,fontFamily:'Poppins-Bold',color:'#1a1a1a'}}>Sunucular</Text>
              <Text style={{fontSize:18,marginLeft:20,marginRight:20,marginBottom:15,fontFamily:'Poppins-Regular',color:'#1a1a1a'}}>3 sunucu listelendi.</Text>
              <View style={{width:window.width}}>
                <TouchableHighlight
                  onPress={()=>{this.props.navigation.navigate("ServerDetail",{serverName:"Liman Server",isActive: 1,image:require('../../Images/pardus.png')})}}
                  style={{flexDirection:'row',width:window.width,height:50,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
                  underlayColor={'#ccc'}>
                  <>
                    <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                      <Image style={{width:18,height:18}} source={require('../../Images/pardus.png')} />
                    </View>
                    <View style={{marginRight:15,width:window.width-80,height:50,justifyContent:'center',alignItems:'flex-start'}}>
                      <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Liman Server</Text>
                    </View>
                    <Pressable onPress={()=>{this.state.isActive === 1 ? this.setState({isActive:0}): this.setState({isActive:1})}} style={{position:'absolute',right:10,top:12.5,backgroundColor:this.state.isActive === 1 ? '#28b441' :'#ea2b64',borderRadius:5,height:25,justifyContent:'center',alignItems:'center'}}>
                      {this.state.isActive === 1 ?
                        <Text style={{fontSize:16,marginLeft:5,marginRight:5,fontFamily:'Poppins-Bold',color:'#fff'}}>ONLINE</Text>
                        :
                        <Text style={{fontSize:16,marginLeft:5,marginRight:5,fontFamily:'Poppins-Bold',color:'#fff'}}>OFFLINE</Text>
                      }
                    </Pressable>
                  </>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={()=>{this.props.navigation.navigate("ServerDetail",{serverName:"Linux Server",isActive: 1,image:require('../../Images/linux.jpeg')})}}
                  style={{flexDirection:'row',width:window.width,height:50,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
                  underlayColor={'#ccc'}>
                  <>
                    <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                      <Image style={{width:18,height:20}} source={require('../../Images/linux.jpeg')} />
                    </View>
                    <View style={{marginRight:15,width:window.width-80,height:50,justifyContent:'center',alignItems:'flex-start'}}>
                      <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Linux Server</Text>
                    </View>
                    <View style={{position:'absolute',right:10,top:12.5,backgroundColor:'#28b441',borderRadius:5,height:25,justifyContent:'center',alignItems:'center'}}>
                      <Text style={{fontSize:16,marginLeft:5,marginRight:5,fontFamily:'Poppins-Bold',color:'#fff'}}>ONLINE</Text>
                    </View>
                  </>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={()=>{this.props.navigation.navigate("ServerDetail",{serverName:"AD Server",isActive: 0,image:require('../../Images/windows.png')})}}
                  style={{flexDirection:'row',width:window.width,height:50,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
                  underlayColor={'#ccc'}>
                  <>
                    <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                      <Image style={{width:18,height:18}} source={require('../../Images/windows.png')} />
                    </View>
                    <View style={{marginRight:15,width:window.width-80,height:50,justifyContent:'center',alignItems:'flex-start'}}>
                      <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>AD Server</Text>
                    </View>
                    <View style={{position:'absolute',right:10,top:12.5,backgroundColor:'#ea2b64',borderRadius:5,height:25,justifyContent:'center',alignItems:'center'}}>
                      <Text style={{fontSize:16,marginLeft:5,marginRight:5,fontFamily:'Poppins-Bold',color:'#fff'}}>OFFLINE</Text>
                    </View>
                  </>
                </TouchableHighlight>
                    <View style={{width:window.width,height:200}}></View>
                  </View>
            </ScrollView>
          </View>
        )
    }
}
