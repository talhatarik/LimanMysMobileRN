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
  TouchableHighlight, Pressable,
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
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view-universal';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'


const data = [10, 1, 2, 2, 2, 1,2,2,2,3,2,2,2,2,2,2,3,3,3,3,3,3]
const dataRam = [1, 1, 2, 2, 3, 3,4,2,2,3,2,2,2,2,2,2,3,3,3,3,9]
const dataIO = [10, 9, 9, 8, 8, 7,8,8,6,6,6,6,5,6,7,7,6,6,6,7,6]


export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive:this.props.route.params.isActive
    };
  }

  componentDidMount() {

    this.setState({
      isActive:this.props.route.params.isActive
    })
  }

  render() {
    return (
      <View style={{width:window.width,marginTop:global.statusBarHeight,height:window.height,alignItems:'center',backgroundColor:'#f1f1f1'}}>
        <View style={{width:window.width,height:45}}>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Server")}} style={{width:30,height:30,position:'absolute',left:20,top:5}}><Image source={require('../../Images/Menu/back.png')} style={{width:30,height:30}} />
          </TouchableOpacity>
        </View>
        <ScrollView  style={{width:window.width}}>

          <View style={{width:window.width,height:30}}>
            <Image style={{width:30,height:30,position:'absolute',left:20,top:15}} source={this.props.route.params.image} />
          <Text style={{fontSize:25,marginLeft:20,marginRight:20,position:'absolute',left:35,top:0,marginTop:10,fontFamily:'Poppins-Bold',color:'#1a1a1a'}}>{this.props.route.params.serverName}</Text>
          </View>
          <View style={{position:'absolute',right:10}}>
          <TouchableOpacity onPress={()=>{this.state.isActive === 1 ? this.setState({isActive:0}): this.setState({isActive:1})}} style={{top:16,backgroundColor:this.state.isActive === 1 ? '#28b441' :'#ea2b64',borderRadius:5,height:25,justifyContent:'center',alignItems:'center'}}>
            {this.state.isActive === 1 ?
              <Text style={{fontSize:16,marginLeft:5,marginRight:5,fontFamily:'Poppins-Bold',color:'#fff'}}>ONLINE</Text>
              :
              <Text style={{fontSize:16,marginLeft:5,marginRight:5,fontFamily:'Poppins-Bold',color:'#fff'}}>OFFLINE</Text>
            }
          </TouchableOpacity>
          </View>
          <ScrollableTabView
            onChangeTab={(event)=>{this.setState({selectedDay:event.i+1})}}
            initialPage={0}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            tabBarBackgroundColor={'rgba(0,0,0,0.0.1)'}
            scrollWithoutAnimation={true}
            tabBarActiveTextColor={'#000'}
            tabBarInactiveTextColor={'#000'}
            tabBarTextStyle={{fontSize:18,color:'rgba(0,0,0,0.8)',fontFamily:(Platform.OS !== 'ios' ? 'Poppins-Bold' : 'Poppins-Bold' )}}
            tabBarUnderlineStyle={{width:25,height:5,backgroundColor:'#6c6c6c',borderRadius:0,marginLeft:20}}
            renderTabBar={() => <ScrollableTabBar
              tabsContainerStyle={{
                paddingRight:30,
                justifyContent: 'flex-start',
                backgroundColor:'#fff'
              }}
              style={{height:50,marginTop:30,borderBottomColor:'rgba(0,0,0,0.1)',borderBottomWidth:0.7}} />}>
            <View style={{width:window.width}}  tabLabel={"Sistem Durumu"} >
              <LinearGradient colors={['#e5e5e5','#eef2f3']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}}  style={{height:200,zIndex:1,top:0,justifyContent:'flex-end'}} >
                <View style={{width:window.width/2,position:'absolute',left:0,padding:10,height:200,top:0}}>
                  <Text style={{fontSize:15,fontFamily:'Poppins-Bold',color:'#000'}}>Hostname</Text>
                  <Text style={{fontSize:18,fontFamily:'Poppins-Regular',color:'#000'}}>pardus</Text>

                  <Text style={{fontSize:15,marginTop:20,fontFamily:'Poppins-Bold',color:'#000'}}>IP Adresi</Text>
                  <Text style={{fontSize:18,fontFamily:'Poppins-Regular',color:'#000'}}>0.0.0.0</Text>

                  <Text style={{fontSize:15,marginTop:20,fontFamily:'Poppins-Bold',color:'#000'}}>İşletim Sistemi</Text>
                  <Text style={{fontSize:18,fontFamily:'Poppins-Regular',color:'#000'}}>Linux Version</Text>

                </View>
                <View style={{width:window.width/2,position:'absolute',right:0,padding:10,height:200,top:0}}>
                  <Text style={{fontSize:15,fontFamily:'Poppins-Bold',color:'#000'}}>Servis Sayısı</Text>
                  <Text style={{fontSize:18,fontFamily:'Poppins-Regular',color:'#000'}}>47</Text>

                  <Text style={{fontSize:15,marginTop:20,fontFamily:'Poppins-Bold',color:'#000'}}>Giriş Yapmış Kullanıcı</Text>
                  <Text style={{fontSize:18,fontFamily:'Poppins-Regular',color:'#000'}}>root</Text>

                  <Text style={{fontSize:15,marginTop:20,fontFamily:'Poppins-Bold',color:'#000'}}>Açık Kalma</Text>
                  <Text style={{fontSize:18,fontFamily:'Poppins-Regular',color:'#000'}}>4 dakika önce</Text>
                </View>
              </LinearGradient>
              <Text style={{fontSize:22,marginLeft:10,marginTop:25,marginRight:20,fontFamily:'Poppins-Bold',color:'#1a1a1a'}}>Kaynak Kullanımları</Text>

              <View style={{width:window.width}}>
                  <Text style={{fontSize:17,marginLeft:10,marginTop:15,marginBottom:15,marginRight:20,fontFamily:'Poppins-Bold',color:'#1a1a1a'}}>CPU Kullanımı (%4)</Text>
                  <AreaChart
                    style={{ height: 200,marginTop:0}}
                    data={data}
                    contentInset={{ top: 0, bottom: 0 }}
                    curve={shape.curveNatural}
                    svg={{ fill: '#0082c8' }}
                  >
                    <Grid/>
                  </AreaChart>
                  <Text style={{fontSize:17,marginLeft:10,marginTop:15,marginBottom:15,marginRight:20,fontFamily:'Poppins-Bold',color:'#1a1a1a'}}>RAM Kullanımı (%10)</Text>
                  <AreaChart
                    style={{ height: 200,marginTop:0 }}
                    data={dataRam}
                    contentInset={{ top: 0, bottom: 0 }}
                    curve={shape.curveNatural}
                    svg={{ fill: '#ff9966' }}
                  >
                    <Grid />
                  </AreaChart>
                  <Text style={{fontSize:17,marginLeft:10,marginTop:15,marginBottom:15,marginRight:20,fontFamily:'Poppins-Bold',color:'#1a1a1a'}}>IO Kullanımı (%60)</Text>
                  <AreaChart
                    style={{ height: 200,marginTop:0 }}
                    data={dataIO}
                    contentInset={{ top: 0, bottom: 0 }}
                    curve={shape.curveNatural}
                    svg={{ fill: '#1D976C' }}
                  >
                    <Grid />
                  </AreaChart>
            </View>
            </View>
            <View style={{width:window.width}}  tabLabel={"Eklentiler"} >
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
              <TouchableHighlight
                onPress={()=>{this.props.navigation.navigate("AddPluginToServer",{image:this.props.route.params.image,serverName:this.props.route.params.serverName,isActive:this.props.route.params.isActive})}}
                style={{flexDirection:'row',width:window.width,height:50,marginTop:1,backgroundColor:'#262626',justifyContent:'center'}}
                underlayColor={'#ccc'}>
                <>
                  <View style={{width:window.width,height:50,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:16,fontFamily:'Poppins-Bold',textAlign:'center',color:'#fff'}}>YENİ EKLENTİ</Text>
                  </View>
                </>
              </TouchableHighlight>
            </View>
            <View style={{width:window.width}}  tabLabel={"Servisler"} >
              <TouchableHighlight
                style={{flexDirection:'row',width:window.width,borderBottomWidth:1,borderBottomColor:'#39ec54',backgroundColor:'#adffba',justifyContent:'center'}}
                underlayColor={'#ccc'}>
                <>
                  <View style={{marginLeft:20,marginRight:20,marginTop:10,marginBottom:10,width:window.width-40,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>apparmor.service</Text>
                    <Text style={{fontSize:14,fontFamily:'Poppins-Regular',color:'#000'}}>Load AppArmor profiles</Text>
                  </View>
                </>
              </TouchableHighlight>
              <TouchableHighlight
                style={{flexDirection:'row',width:window.width,borderBottomWidth:1,borderBottomColor:'#ffa296',backgroundColor:'rgba(255,193,193,0.91)',justifyContent:'center'}}
                underlayColor={'#ccc'}>
                <>
                  <View style={{marginLeft:20,marginRight:20,marginTop:10,marginBottom:10,width:window.width-40,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>console-setup.service</Text>
                    <Text style={{fontSize:14,fontFamily:'Poppins-Regular',color:'#000'}}>Set console font and keymap</Text>
                  </View>
                </>
              </TouchableHighlight>
              <TouchableHighlight
                style={{flexDirection:'row',width:window.width,borderBottomWidth:1,borderBottomColor:'#dcd656',backgroundColor:'#ffebb0',justifyContent:'center'}}
                underlayColor={'#ccc'}>
                <>
                  <View style={{marginLeft:20,marginRight:20,marginTop:10,marginBottom:10,width:window.width-40,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>cron.service</Text>
                    <Text style={{fontSize:14,fontFamily:'Poppins-Regular',color:'#000'}}>Regular background program processing deamon</Text>
                  </View>
                </>
              </TouchableHighlight>
              <TouchableHighlight
                style={{flexDirection:'row',width:window.width,borderBottomWidth:1,borderBottomColor:'#39ec54',backgroundColor:'#adffba',justifyContent:'center'}}
                underlayColor={'#ccc'}>
                <>
                  <View style={{marginLeft:20,marginRight:20,marginTop:10,marginBottom:10,width:window.width-40,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>keyboard-setup.service</Text>
                    <Text style={{fontSize:14,fontFamily:'Poppins-Regular',color:'#000'}}>Set the console keyboard layout.</Text>
                  </View>
                </>
              </TouchableHighlight>
              <TouchableHighlight
                style={{flexDirection:'row',width:window.width,borderBottomWidth:1,borderBottomColor:'#39ec54',backgroundColor:'#adffba',justifyContent:'center'}}
                underlayColor={'#ccc'}>
                <>
                  <View style={{marginLeft:20,marginRight:20,marginTop:10,marginBottom:10,width:window.width-40,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:16,fontFamily:'Poppins-Bold',color:'#000'}}>liman-render.service</Text>
                    <Text style={{fontSize:14,fontFamily:'Poppins-Regular',color:'#000'}}>Liman System Service & Extention Renderer</Text>
                  </View>
                </>
              </TouchableHighlight>
            </View>
          </ScrollableTabView>
          <View style={{width:window.width}}>
            <View style={{width:window.width,height:200}}></View>
          </View>
        </ScrollView>
      </View>
    )
  }
}
