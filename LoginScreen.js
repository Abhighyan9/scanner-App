import {View,Text,StyleSheet,Switch,CheckBox} from 'react-native';
import {Card,CardItem} from 'native-base';
import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import * as firebase from "firebase";


export default class LoginScreen extends React.Component {

    constructor(props){
        super(props)
        this.validateInput= React.createRef()
            this.state={
            check:false
          }
  }

    state={
        email:'',
        password:'',
        errorMessage:null
    }

    handleLogin = () => {
        const {email,password} = this.state
        
        firebase.auth().initializeApp().signInWithEmailAndPassword(email, password).catch(error=>this.setState({errorMessage:error.message}))
    }

    

    // onLogin = async () => {

    //     let result = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
    //         // Handle Errors here.
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // ...
    //         this.validateInput.current.shake(800)
    //           this.setState({errMsg:'Invalid login details. Try again!'})
    //       })
    //       .catch((error) => {
    //           console.log(error)
    //           return false
    //       })

    //       if(result){
    //           this.props.navigation.navigate('Dashboard')
    //       }
    //       else{
    //           this.validateInput.current.shake(800)
    //           this.setState({errMsg:'Invalid login details. Try again!'})
    //       }
          
    //       console.log("This is login result",result)
    // //     if(this.state.email=='abhighyan.bommerla@gmail.com'&& this.state.password=='12345'){
    // //         this.props.navigation.navigate("Dashboard")
    // //  }else{
    // //         this.validateInput.current.shake(800)
    // //      this.setState({errMsg:'Invalid Login Details, Try Again!'})
    // //  }
    // }

    checkBoxTest(){
      this.setState({
        check:!this.state.check
      })
      alert("Data saved "+!this.state.check)
    }
    render(){
        return(
            <View style={styles.container}>
                
                <Text 
          style={{fontSize:35,
              fontWeight:"bold",
              color:"#ECB9BD",
              textAlign:"center",
              paddingBottom:10,
              }}>Welcome Back!</Text>

                <Text 
          style={{fontSize:25,
              fontWeight:"bold",
              color:"#000000",
              textAlign:"center",
              paddingBottom:40,
              }}>Sign in to continue</Text>

             {/* <Animatable.View ref={this.validateInput} > */}
                <TextInput 
                    style={{marginTop:40,borderBottomColor:'#ddd',borderBottomWidth:1,paddingBottom:20}} 
                    placeholder="Email"  
                    onChangeText={email =>this.setState({email})}
                    value={this.state.email}        
                        
                          
                />
                <TextInput    
                    style={{marginTop:40,borderBottomColor:'#ddd',borderBottomWidth:1,paddingBottom:20}} 
                    placeholder="Password" 
                    secureTextEntry={true} 
                    onChangeText={password =>this.setState({password})}
                    value={this.state.password}     
                          
                />
                <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                
                  <CardItem>
                  <CheckBox style={{}}value={this.state.check} onChange={()=>this.checkBoxTest()}/>
                  <Text style={{fontSize:18}}>Remember Me</Text>
                  </CardItem>
                
                  

                <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                  <TouchableOpacity 
                      // onPress={()=> this.handleLogin()}
                      onPress={()=> this.props.navigation.navigate('Dashboard')} 
                      style={{width:200,backgroundColor:'#ECB9BD',padding:10,alignItems:'center',justifyContent:'center',borderRadius:40,marginTop:30}}>
                    <Text style={{textAlign:'center',color:'#fff',fontSize:16}}>Sign In</Text>
                  </TouchableOpacity>

                  <Text style={{marginTop:20}}>--- OR ---</Text>
                  <View style={{flexDirection:'row',marginTop:10}}>
                    <View style={{height:50, width:50,borderRadius:50/2,backgroundColor:"#1877F2",alignItems:"center",justifyContent:'center'}}>
                       <Text style={{fontSize:20,fontWeight:'bold',color:"#fff"}}>f</Text>
                    </View>
                    <View style={{height:50, width:50,borderRadius:50/2,backgroundColor:"#db4a39",marginHorizontal:10,alignItems:"center",justifyContent:'center'}}>
                       <Text style={{fontSize:20,fontWeight:'bold',color:"#fff"}}>G</Text>
                    </View>       
                    
                  </View>
                  <View style={{flexDirection:'row',marginTop:40}}>
                    <Text style={{color:'gray'}}>Don't have an Account? </Text>
                    <Text style={{fontSize:15,color:"#ECB9BD",fontWeight:'bold'}} onPress={()=> this.props.navigation.navigate('SignUp')}>Sign Up</Text>
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
    },
    errorMessage:{
        height:72,
        alignItems:"center",
        justifyContent:"center",
    },
    error:{
        color:"red",
        textAlign:"center",
        fontSize:13,
        marginTop:10
    }
})


