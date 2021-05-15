import {View,Text,FlatList,StyleSheet,Image} from 'react-native';
import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {AntDesign,Ionicons,Entypo,Foundation,Feather} from '@expo/vector-icons';
import { Button } from 'react-native-paper';

const data =[
  
    {
      percentage:66,
      color:'#F7BE0E',
      max:100,
      radius:140,
      strokeWidth:30
    },
  ];
export default class DashboardScreen extends React.Component {
    
    render(){
        
        return(
            <View style={styles.container}>
                
                <View>                 
                  <Image
                  style={{width:410,height:400,marginTop:-90,marginLeft:-20}} 
                  source={require('./assets/images/dsgn.png')}
                  resizeMode="contain" />
                </View>
              
              <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 80,paddingLeft:70}} onPress={()=> this.props.navigation.navigate('Scans')}>
                <View style={[styles.centerElement, {width: 75}]}>
                  <View style={{borderWidth: 1, borderColor: '#ececec', padding: 22, borderRadius:100}}>
                    <Feather name="camera" size={28} color="#e89b17" />
                  </View>
                </View>
                <View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center',paddingLeft:10}}>
                  <Text style={{fontSize: 20}}>Easy</Text>                  
                </View>                
				      </TouchableOpacity>

              <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 80,paddingLeft:70}} onPress={()=>{}}>
                <View style={[styles.centerElement, {width: 75}]}>
                  <View style={{borderWidth: 1, borderColor: '#ececec', padding: 22, borderRadius:100}}>
                    <Entypo name="documents" size={28} color="#26aa99" align=""/>
                  </View>
                </View>
                <View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center',paddingLeft:10}}>
                  <Text style={{fontSize: 20}}>Multi-document</Text>                  
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 80,paddingLeft:70}} onPress={()=>{}}>
                <View style={[styles.centerElement, {width: 75}]}>
                  <View style={{borderWidth: 1, borderColor: '#ececec', padding: 22, borderRadius:100}}>
                    <Foundation name="page-search" size={28} color="#0082fc" align=""/>
                  </View>
                </View>
                <View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center',paddingLeft:10}}>
                  <Text style={{fontSize: 20}}>Navigation</Text>                  
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{flexDirection: 'row', backgroundColor: '#fff', marginBottom: 2, height: 80,paddingLeft:70}} onPress={()=> this.props.navigation.navigate('Gallery')}>
                <View style={[styles.centerElement, {width: 75}]}>
                  <View style={{borderWidth: 1, borderColor: '#ececec', padding: 22, borderRadius:100}}>
                    <Foundation name="page-edit" size={28} color="#FF0000" align=""/>
                  </View>
                </View>
                <View style={{flexGrow: 1, flexShrink: 1, alignSelf: 'center',paddingLeft:10}}>
                  <Text style={{fontSize: 20}}>Editor</Text>                  
                </View>
              </TouchableOpacity>

              <View style={{marginVertical:30,paddingLeft:90}}>  
                <View>
                    
                    <TouchableOpacity 
                                onPress={()=> this.props.navigation.navigate('Scans')}
                                style={{width:200,backgroundColor:'#ECB9BD',padding:10,alignItems:'center',justifyContent:'center',borderRadius:60}}>
                              <Text style={{textAlign:'center',color:'#fff',fontSize:16}}>Continue</Text>
                    </TouchableOpacity>
                    
                </View>
              </View>
        
                

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        padding:20
    }
})


