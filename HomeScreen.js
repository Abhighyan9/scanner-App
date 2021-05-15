import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScreen extends React.Component {
    render(){
        this.props.navigation.setOptions({
            headerBackTitle:'',
            headerShown:false,
        })
  return (
    
    <View style={styles.container}>
      <View style={{backgroundColor:"#ECB9BD",width:"100%",height:"100%"}}>                 
      <Image
        style={{width:"100%",height:450}} 
        source={require('./assets/images/scan1.png')}
        resizeMode="center" />
        
       
      <Text 
          style={{fontSize:50,
              fontWeight:"bold",
              color:"#ffffff",
              textAlign:"center",
              paddingBottom:60,
              margin:-50}}>Smart Scanner</Text>

      <Text
         style={{fontSize:16,
              
              color:"gray",
              textAlign:"center",              
              marginHorizontal:100}}>Welcome to Splash Screen!</Text>        
           
      <View style={{flexDirection:"row",margin:20,paddingVertical:20}}>
         <TouchableOpacity
           onPress={() => this.props.navigation.navigate('SignIn')} 
           style={{backgroundColor:"#fff",padding:10,width:150,borderRadius:30,marginHorizontal:20,borderWidth:1,borderColor:"#ECB9BD"}}>
         <Text style={{textAlign:"center",color:"#ECB9BD",fontSize:18}}>Sign In</Text>
         </TouchableOpacity>     

          
         <TouchableOpacity
           onPress={() => this.props.navigation.navigate('SignUp')} 
           style={{backgroundColor:"#fff",padding:10,width:150,borderRadius:30,marginHorizontal:10,borderWidth:1,borderColor:"#ECB9BD"}}>
         <Text style={{textAlign:"center",color:"#ECB9BD",fontSize:18}}>Sign Up</Text>
         </TouchableOpacity>     

      </View>

      {/* <Text style={{fontSize:16,marginTop:10}}>Or via Other</Text>
      
      <View style={{flexDirection:'row',marginTop:20}}>
        
        <View style={{height:50, width:50,borderRadius:50/2,backgroundColor:"#1877F2",alignItems:"center",justifyContent:'center'}}>
         <Text style={{fontSize:20,fontWeight:'bold',color:"#fff"}}>f</Text>
        </View>
        <View style={{height:50, width:50,borderRadius:50/2,backgroundColor:"#db4a39",marginHorizontal:10,alignItems:"center",justifyContent:'center'}}>
         <Text style={{fontSize:20,fontWeight:'bold',color:"#fff"}}>G</Text>
        </View>       
         
      </View> */}
      </View>
    </View>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:"flex-start",
  },
   
  
});
