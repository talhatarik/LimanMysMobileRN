import React, {Component } from "react";
import {
  View,
  Dimensions,
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput, TouchableHighlight,
} from "react-native";
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
            <TouchableOpacity  onPress={()=>{this.props.navigation.navigate("AddUser")}} style={{width:30,height:30,position:'absolute',right:20,top:5}}><Image source={require('../../Images/Menu/add.png')} style={{width:30,height:30}} />
            </TouchableOpacity>
            <ScrollView  style={{width:window.width}}>
              <Text style={{fontSize:25,marginLeft:20,marginRight:20,marginTop:10,fontFamily:'Poppins-Bold',color:'#1a1a1a'}}>Kullanıcılar</Text>
              <Text style={{fontSize:18,marginLeft:20,marginRight:20,fontFamily:'Poppins-Regular',color:'#1a1a1a'}}>Sisteminize ait kullanıcıları buradan yönetebilirsiniz.</Text>
              <View>
                <TextInput placeholder={'Ara...'} placeholderTextColor={'#ccc'} style={{fontFamily:'Poppins-Regular',fontSize:20,paddingLeft:20,color:'#757575',height:50,marginLeft:20,borderColor:'#e8e8e8',borderWidth:1,marginRight:20,borderRadius:10,marginTop:10,backgroundColor:'#fff',justifyContent:'center'}}>
                </TextInput>
                <Image source={require('../../Images/search.png')} style={{opacity:0.5,width:25,height:25,position:'absolute',zIndex:10,right:40,top:22}} />
              </View>
              <View style={{width:window.width,height:20}}></View>
              <Text style={{fontSize:18,marginLeft:20,marginRight:20,marginBottom:5,fontFamily:'Poppins-Regular',color:'#1a1a1a'}}>4 kullanıcı listelendi.</Text>

              <TouchableHighlight
                style={{flexDirection:'row',width:window.width,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
                underlayColor={'#ccc'}>
                <>
                  <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:25,height:25,marginTop:5,borderRadius:10}} source={require('../../Images/Plugins/ansible.png')} />
                  </View>
                  <View style={{marginRight:15,marginLeft:5,marginTop:10,marginBottom:10,width:window.width-80,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Mehmet Yılmaz</Text>
                  </View>
                </>
              </TouchableHighlight>
              <TouchableHighlight
                style={{flexDirection:'row',width:window.width,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
                underlayColor={'#ccc'}>
                <>
                  <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:25,height:25,marginTop:5,borderRadius:10}} source={require('../../Images/Plugins/ansible.png')} />
                  </View>
                  <View style={{marginRight:15,marginLeft:5,marginTop:10,marginBottom:10,width:window.width-80,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Ahmet Yılmaz</Text>
                  </View>
                </>
              </TouchableHighlight>
              <TouchableHighlight
                style={{flexDirection:'row',width:window.width,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
                underlayColor={'#ccc'}>
                <>
                  <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:25,height:25,marginTop:5,borderRadius:10}} source={require('../../Images/Plugins/ansible.png')} />
                  </View>
                  <View style={{marginRight:15,marginLeft:5,marginTop:10,marginBottom:10,width:window.width-80,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Yılmaz Mehmet</Text>
                  </View>
                </>
              </TouchableHighlight>
              <TouchableHighlight
                style={{flexDirection:'row',width:window.width,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
                underlayColor={'#ccc'}>
                <>
                  <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:25,height:25,marginTop:5,borderRadius:10}} source={require('../../Images/Plugins/ansible.png')} />
                  </View>
                  <View style={{marginRight:15,marginLeft:5,marginTop:10,marginBottom:10,width:window.width-80,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Ahmet Mehmet</Text>
                  </View>
                </>
              </TouchableHighlight>
            </ScrollView>
          </View>
        )
    }
}
