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
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Main")}} style={{width:30,height:30,position:'absolute',left:20,top:5}}><Image source={require('../../Images/Menu/back.png')} style={{width:30,height:30}} />
          </TouchableOpacity>
        </View>
        <ScrollView  style={{width:window.width}}>
          <Text style={{fontSize:25,marginLeft:20,marginRight:20,marginTop:10,fontFamily:'Poppins-Bold',marginBottom:15,color:'#1a1a1a'}}>Bildirimler</Text>
          <View style={{width:window.width}}>
            <TouchableHighlight
              style={{flexDirection:'row',width:window.width,marginTop:1,backgroundColor:'#fff0e0',justifyContent:'center'}}
              underlayColor={'#ccc'}>
              <>
                <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                  <Image style={{width:40,height:40,marginTop:10,borderRadius:10}} source={require('../../Images/Plugins/ansible.png')} />
                </View>
                <View style={{marginRight:15,marginLeft:5,marginTop:10,marginBottom:10,width:window.width-80,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Mehmet Yılmaz</Text>
                  <Text style={{fontSize:14,fontFamily:'Poppins-Regular',color:'#000'}}>Size bir kullanıcı kaydetme onayı gönderdi.</Text>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={{flexDirection:'row',width:window.width,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
              underlayColor={'#ccc'}>
              <>
                <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                  <Image style={{width:40,height:40,marginTop:10,borderRadius:10}} source={require('../../Images/Plugins/ansible.png')} />
                </View>
                <View style={{marginRight:15,marginLeft:5,marginTop:10,marginBottom:10,width:window.width-80,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Mehmet Yılmaz</Text>
                  <Text style={{fontSize:14,fontFamily:'Poppins-Regular',color:'#000'}}>Size bir kullanıcı kaydetme onayı gönderdi.</Text>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={{flexDirection:'row',width:window.width,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
              underlayColor={'#ccc'}>
              <>
                <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                  <Image style={{width:40,height:40,marginTop:10,borderRadius:10}} source={require('../../Images/Plugins/ansible.png')} />
                </View>
                <View style={{marginRight:15,marginLeft:5,marginTop:10,marginBottom:10,width:window.width-80,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Mehmet Yılmaz</Text>
                  <Text style={{fontSize:14,fontFamily:'Poppins-Regular',color:'#000'}}>Size bir kullanıcı kaydetme onayı gönderdi.</Text>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={{flexDirection:'row',width:window.width,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
              underlayColor={'#ccc'}>
              <>
                <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                  <Image style={{width:40,height:40,marginTop:10,borderRadius:10}} source={require('../../Images/Plugins/ansible.png')} />
                </View>
                <View style={{marginRight:15,marginLeft:5,marginTop:10,marginBottom:10,width:window.width-80,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Mehmet Yılmaz</Text>
                  <Text style={{fontSize:14,fontFamily:'Poppins-Regular',color:'#000'}}>Size bir kullanıcı kaydetme onayı gönderdi.</Text>
                </View>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={{flexDirection:'row',width:window.width,marginTop:1,backgroundColor:'#fff',justifyContent:'center'}}
              underlayColor={'#ccc'}>
              <>
                <View style={{marginLeft:15,width:50,height:50,justifyContent:'center',alignItems:'center'}}>
                  <Image style={{width:40,height:40,marginTop:10,borderRadius:10}} source={require('../../Images/Plugins/ansible.png')} />
                </View>
                <View style={{marginRight:15,marginLeft:5,marginTop:10,marginBottom:10,width:window.width-80,justifyContent:'center',alignItems:'flex-start'}}>
                  <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>Mehmet Yılmaz</Text>
                  <Text style={{fontSize:14,fontFamily:'Poppins-Regular',color:'#000'}}>Size bir kullanıcı kaydetme onayı gönderdi.</Text>
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
