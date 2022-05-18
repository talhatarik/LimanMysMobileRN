import React, {Component } from "react";
import {
  View,
  Dimensions,
  Animated,
  TextInput,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableHighlight,
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
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Plugin")}} style={{width:30,height:30,position:'absolute',left:20,top:5}}><Image source={require('../../Images/Menu/back.png')} style={{width:30,height:30}} />
          </TouchableOpacity>
        </View>
        <ScrollView  style={{width:window.width}}>

          <Text style={{fontSize:25,marginLeft:20,marginRight:20,marginTop:10,fontFamily:'Poppins-Bold',color:'#1a1a1a'}}>Eklenti Marketi</Text>

          <View>
          <TextInput placeholder={'Ara...'} placeholderTextColor={'#ccc'} style={{fontFamily:'Poppins-Regular',fontSize:20,paddingLeft:20,color:'#757575',height:50,marginLeft:20,borderColor:'#e8e8e8',borderWidth:1,marginRight:20,borderRadius:10,marginTop:10,backgroundColor:'#fff',justifyContent:'center'}}>
          </TextInput>
            <Image source={require('../../Images/search.png')} style={{opacity:0.5,width:25,height:25,position:'absolute',zIndex:10,right:40,top:22}} />
          </View>
          <View style={{width:window.width}}>


            <Text style={{fontSize:16,marginLeft:20,marginRight:20,marginTop:20,fontFamily:'Poppins-Bold',marginBottom:15,color:'#1a1a1a'}}>Önerilenler</Text>
            <TouchableHighlight
              style={{flexDirection:'row',width:window.width,height:50,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
              underlayColor={'#ccc'}>
              <>
                <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                  <Image style={{width:18,height:18}} source={require('../../Images/Plugins/ansible.png')} />
                </View>
                <View style={{marginRight:15,width:window.width-80,height:50,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Basit Güvenlik Duvarı</Text>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={{flexDirection:'row',width:window.width,height:50,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
              underlayColor={'#ccc'}>
              <>
                <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                  <Image style={{width:18,height:18}} source={require('../../Images/Plugins/dns.png')} />
                </View>
                <View style={{marginRight:15,width:window.width-80,height:50,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>DNS</Text>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={{flexDirection:'row',width:window.width,height:50,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
              underlayColor={'#ccc'}>
              <>
                <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                  <Image style={{width:18,height:18}} source={require('../../Images/Plugins/web.png')} />
                </View>
                <View style={{marginRight:15,width:window.width-80,height:50,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>WEB</Text>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={{flexDirection:'row',width:window.width,height:50,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
              underlayColor={'#ccc'}>
              <>
                <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                  <Image style={{width:18,height:18}} source={require('../../Images/Plugins/guvenlik.png')} />
                </View>
                <View style={{marginRight:15,width:window.width-80,height:50,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Basit Güvenlik Duvarı</Text>
                </View>
              </>
            </TouchableHighlight>


            <Text style={{fontSize:16,marginLeft:20,marginRight:20,marginTop:30,fontFamily:'Poppins-Bold',marginBottom:15,color:'#1a1a1a'}}>En Yeniler</Text>
            <TouchableHighlight
              style={{flexDirection:'row',width:window.width,height:50,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
              underlayColor={'#ccc'}>
              <>
                <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                  <Image style={{width:18,height:18}} source={require('../../Images/Plugins/ansible.png')} />
                </View>
                <View style={{marginRight:15,width:window.width-80,height:50,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Basit Güvenlik Duvarı</Text>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={{flexDirection:'row',width:window.width,height:50,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
              underlayColor={'#ccc'}>
              <>
                <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                  <Image style={{width:18,height:18}} source={require('../../Images/Plugins/dns.png')} />
                </View>
                <View style={{marginRight:15,width:window.width-80,height:50,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>DNS</Text>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={{flexDirection:'row',width:window.width,height:50,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
              underlayColor={'#ccc'}>
              <>
                <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                  <Image style={{width:18,height:18}} source={require('../../Images/Plugins/web.png')} />
                </View>
                <View style={{marginRight:15,width:window.width-80,height:50,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>WEB</Text>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={{flexDirection:'row',width:window.width,height:50,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
              underlayColor={'#ccc'}>
              <>
                <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                  <Image style={{width:18,height:18}} source={require('../../Images/Plugins/guvenlik.png')} />
                </View>
                <View style={{marginRight:15,width:window.width-80,height:50,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Basit Güvenlik Duvarı</Text>
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
