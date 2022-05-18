import React, {Component } from "react";
import Navigation from '../Navigation'

import { View, Dimensions, Animated, Image, TextInput,SafeAreaView,TouchableOpacity,ScrollView, Text } from "react-native";
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
          step:0,
        };
    }

    render() {
      if(this.state.step === 0){
        return (
          <LinearGradient colors={['#232526','#414345']}  start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  style={{width:window.width,marginTop:global.statusBarHeight,height:window.height,alignItems:'center',backgroundColor:'#f1f1f1'}}>
            <View style={{marginRight:15,marginTop:window.width/2,marginBottom:10,width:window.width-80,justifyContent:'center',alignItems:'flex-start'}}>
              <Text style={{fontSize:30,marginRight:20,marginTop:10,fontFamily:'Poppins-Bold',color:'#fff'}}>GİRİŞ YAP</Text>
              <Text style={{fontSize:18,marginRight:10,fontFamily:'Poppins-Regular',color:'#fff'}}>SMS ile giriş yapmak için lütfen cep telefonu numaranızı başında sıfır olmadan giriniz.</Text>
              <TextInput value={'5555555555'} style={{color:'#fff',textAlign:'center',fontFamily:'Poppins-Bold',fontSize:20,width:window.width-60,borderRadius:10,borderWidth:2,marginTop:25,borderColor:'#fff',height:50}}></TextInput>
            </View>
            <TouchableOpacity  onPress={()=>this.setState({step:1})} style={{position:'absolute',justifyContent:'center',alignItems:'center',bottom:100,color:'#ff9a2f',textAlign:'center',fontFamily:'Poppins-Bold',fontSize:20,width:window.width-60,borderRadius:10,borderWidth:2,borderColor:'#fff',backgroundColor:'#fff',height:50}}>
              <Text style={{fontSize:20,fontFamily:'Poppins-Semibold',color:'#203A43'}}>DEVAM</Text>
            </TouchableOpacity>
          </LinearGradient>
        )
      }
      else if(this.state.step === 1){
        return (
          <LinearGradient colors={['#232526','#414345']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  style={{width:window.width,marginTop:global.statusBarHeight,height:window.height,alignItems:'center',backgroundColor:'#f1f1f1'}}>
            <View style={{marginRight:15,marginTop:window.width/2,marginBottom:10,width:window.width-80,justifyContent:'center',alignItems:'flex-start'}}>
              <Text style={{fontSize:30,marginRight:20,marginTop:10,fontFamily:'Poppins-Bold',color:'#fff'}}>DOĞRULAMA KODU</Text>
              <Text style={{fontSize:18,marginRight:10,fontFamily:'Poppins-Regular',color:'#fff'}}>Lütfen cep telefonunuza gönderilen 4 haneli kodu yazınız.</Text>
              <TextInput value={'3498'} style={{color:'#fff',textAlign:'center',fontFamily:'Poppins-Bold',fontSize:20,width:window.width-60,borderRadius:10,borderWidth:2,marginTop:25,borderColor:'#fff',height:50}}></TextInput>
            </View>
            <TouchableOpacity  onPress={()=>this.setState({step:2})} style={{position:'absolute',justifyContent:'center',alignItems:'center',bottom:100,color:'#ff9a2f',textAlign:'center',fontFamily:'Poppins-Bold',fontSize:20,width:window.width-60,borderRadius:10,borderWidth:2,borderColor:'#fff',backgroundColor:'#fff',height:50}}>
              <Text style={{fontSize:20,fontFamily:'Poppins-Semibold',color:'#203A43'}}>TAMAM</Text>
            </TouchableOpacity>
          </LinearGradient>
        )
      }
      else{
        return <Navigation/>
      }

    }
}
