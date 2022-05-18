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
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ServerDetail",{image:this.props.route.params.image,serverName:this.props.route.params.serverName,isActive:this.props.route.params.isActive})}} style={{width:30,height:30,position:'absolute',left:20,top:5}}><Image source={require('../../Images/Menu/back.png')} style={{width:30,height:30}} />
              </TouchableOpacity>
            </View>
            <ScrollView  style={{width:window.width}}>
              <Text style={{fontSize:25,marginLeft:20,marginRight:20,marginTop:10,fontFamily:'Poppins-Bold',color:'#1a1a1a'}}>Eklentiler (4)</Text>
              <Text style={{fontSize:18,marginLeft:20,marginRight:20,marginBottom:15,fontFamily:'Poppins-Regular',color:'#1a1a1a'}}>Daha fazle eklentiye sahip olmak için eklenti talebinde bulunabilirsiniz.</Text>
              <View style={{width:window.width}}>
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
