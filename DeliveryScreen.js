import {View,Text,StyleSheet} from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class DeliveryScreen extends React.Component {

    render(){
        return(
            <View style={styles.container}>
              <View style={{marginTop:500,flexDirection:'row'}}>
                <Text style={{color:'#F7BE0E',fontSize:25,}}>Speed               </Text>
                <Text style={{fontSize:25,color:"gray"}}>3.6 m/s</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={{color:'#F7BE0E',fontSize:25,}}>Heading       </Text>
                <Text style={{fontSize:25,color:"gray"}}>      23° N</Text>
              </View>
              <View style={{flexDirection:'row'}}>  
                <Text style={{color:'#F7BE0E',fontSize:25,}}>Latitude           </Text>
                <Text style={{fontSize:25,color:"gray"}}>12.8235</Text>
              </View>
              <View style={{flexDirection:'row'}}>  
                <Text style={{color:'#F7BE0E',fontSize:25,}}>Longitude        </Text>
                <Text style={{fontSize:25,color:"gray"}}>80.0458</Text>
              </View>
                
        </View>
        
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        padding:20,
        paddingLeft:65
    },
    
})