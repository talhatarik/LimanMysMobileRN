import React, {Component } from "react";
import { View, Dimensions, Animated, Image, SafeAreaView, ScrollView, Text, TouchableHighlight } from "react-native";
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
              </View>
            <ScrollView  style={{width:window.width}}>
              <Text style={{fontSize:25,marginLeft:20,marginRight:20,marginTop:10,fontFamily:'Poppins-Bold',color:'#1a1a1a'}}>Bekleyen Onaylar</Text>
              <Text style={{fontSize:18,marginLeft:20,marginBottom:10,marginRight:20,fontFamily:'Poppins-Regular',color:'#1a1a1a'}}>5 bekleyen onayınız bulunmaktadır.</Text>
              <TouchableHighlight
                style={{flexDirection:'row',width:window.width,marginTop:1,backgroundColor:'#FFF',justifyContent:'center'}}
                underlayColor={'#ccc'}>
                <>
                  <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:40,height:40,marginTop:10,borderRadius:10}} source={require('../../Images/Plugins/ansible.png')} />
                  </View>
                  <View style={{marginRight:15,marginLeft:5,marginTop:10,marginBottom:25,width:window.width-80,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Mehmet Yılmaz</Text>
                    <Text style={{fontSize:14,fontFamily:'Poppins-Regular',color:'#000'}}>Yeni sunucu oluşturma onayı talep etmekteyim.</Text>
                    <View  style={{height:200,width:window.width*4/5,zIndex:1,marginBottom:25,top:15,justifyContent:'flex-end'}} >
                      <View style={{width:window.width/2.5,position:'absolute',left:0,height:200,top:0}}>
                        <Text style={{fontSize:13,fontFamily:'Poppins-Bold',color:'#000'}}>Hostname</Text>
                        <Text style={{fontSize:15,fontFamily:'Poppins-Regular',color:'#000'}}>pardus</Text>

                        <Text style={{fontSize:13,marginTop:20,fontFamily:'Poppins-Bold',color:'#000'}}>IP Adresi</Text>
                        <Text style={{fontSize:15,fontFamily:'Poppins-Regular',color:'#000'}}>0.0.0.0</Text>

                        <Text style={{fontSize:13,marginTop:20,fontFamily:'Poppins-Bold',color:'#000'}}>İşletim Sistemi</Text>
                        <Text style={{fontSize:15,fontFamily:'Poppins-Regular',color:'#000'}}>Linux Version</Text>

                      </View>
                      <View style={{width:window.width/2.5,position:'absolute',right:0,height:200,top:0}}>
                        <Text style={{fontSize:13,fontFamily:'Poppins-Bold',color:'#000'}}>Servis Sayısı</Text>
                        <Text style={{fontSize:15,fontFamily:'Poppins-Regular',color:'#000'}}>47</Text>

                        <Text style={{fontSize:13,marginTop:20,fontFamily:'Poppins-Bold',color:'#000'}}>Giriş Yapmış Kullanıcı</Text>
                        <Text style={{fontSize:15,fontFamily:'Poppins-Regular',color:'#000'}}>root</Text>

                        <Text style={{fontSize:13,marginTop:20,fontFamily:'Poppins-Bold',color:'#000'}}>Açık Kalma</Text>
                        <Text style={{fontSize:15,fontFamily:'Poppins-Regular',color:'#000'}}>4 dakika önce</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{width:window.width/3,height:40,backgroundColor:'#52e36e',justifyContent:'center',alignItems:'center',borderRadius:10,position:'absolute',bottom:10,right:20}}>
                    <Text style={{fontFamily:'Poppins-Bold',color:'#fff',fontSize:20}}>EVET</Text>
                  </View>
                  <View style={{width:window.width/3,height:40,backgroundColor:'#cc2954',justifyContent:'center',alignItems:'center',borderRadius:10,position:'absolute',bottom:10,right:window.width/3+30}}>
                    <Text style={{fontFamily:'Poppins-Bold',color:'#fff',fontSize:20}}>HAYIR</Text>
                  </View>
                </>
              </TouchableHighlight>
              <TouchableHighlight
                style={{flexDirection:'row',width:window.width,marginTop:1,backgroundColor:'#FFF',justifyContent:'center'}}
                underlayColor={'#ccc'}>
                <>
                  <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:40,height:40,marginTop:10,borderRadius:10}} source={require('../../Images/Plugins/ansible.png')} />
                  </View>
                  <View style={{marginRight:15,marginLeft:5,marginTop:10,marginBottom:10,width:window.width-80,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Mehmet Yılmaz</Text>
                    <Text style={{fontSize:14,fontFamily:'Poppins-Regular',color:'#000'}}>Sunucu silme onayı talep etmekteyim.</Text>
                    <View  style={{height:200,width:window.width*4/5,zIndex:1,marginBottom:25,top:15,justifyContent:'flex-end'}} >
                      <View style={{width:window.width/2.5,position:'absolute',left:0,height:200,top:0}}>
                        <Text style={{fontSize:13,fontFamily:'Poppins-Bold',color:'#000'}}>Hostname</Text>
                        <Text style={{fontSize:15,fontFamily:'Poppins-Regular',color:'#000'}}>pardus</Text>

                        <Text style={{fontSize:13,marginTop:20,fontFamily:'Poppins-Bold',color:'#000'}}>IP Adresi</Text>
                        <Text style={{fontSize:15,fontFamily:'Poppins-Regular',color:'#000'}}>0.0.0.0</Text>

                        <Text style={{fontSize:13,marginTop:20,fontFamily:'Poppins-Bold',color:'#000'}}>İşletim Sistemi</Text>
                        <Text style={{fontSize:15,fontFamily:'Poppins-Regular',color:'#000'}}>Linux Version</Text>

                      </View>
                      <View style={{width:window.width/2.5,position:'absolute',right:0,height:200,top:0}}>
                        <Text style={{fontSize:13,fontFamily:'Poppins-Bold',color:'#000'}}>Servis Sayısı</Text>
                        <Text style={{fontSize:15,fontFamily:'Poppins-Regular',color:'#000'}}>47</Text>

                        <Text style={{fontSize:13,marginTop:20,fontFamily:'Poppins-Bold',color:'#000'}}>Giriş Yapmış Kullanıcı</Text>
                        <Text style={{fontSize:15,fontFamily:'Poppins-Regular',color:'#000'}}>root</Text>

                        <Text style={{fontSize:13,marginTop:20,fontFamily:'Poppins-Bold',color:'#000'}}>Açık Kalma</Text>
                        <Text style={{fontSize:15,fontFamily:'Poppins-Regular',color:'#000'}}>4 dakika önce</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{width:window.width/3,height:40,backgroundColor:'#52e36e',justifyContent:'center',alignItems:'center',borderRadius:10,position:'absolute',bottom:10,right:20}}>
                    <Text style={{fontFamily:'Poppins-Bold',color:'#fff',fontSize:20}}>EVET</Text>
                  </View>
                  <View style={{width:window.width/3,height:40,backgroundColor:'#cc2954',justifyContent:'center',alignItems:'center',borderRadius:10,position:'absolute',bottom:10,right:window.width/3+30}}>
                    <Text style={{fontFamily:'Poppins-Bold',color:'#fff',fontSize:20}}>HAYIR</Text>
                  </View>
                </>
              </TouchableHighlight>
              <View style={{width:window.width-40,marginLeft:20}}>

                    <View style={{width:window.width,height:200}}></View>
                  </View>
            </ScrollView>
          </View>
        )
    }
}
