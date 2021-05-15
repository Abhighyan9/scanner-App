import {View,Text,StyleSheet,CheckBox} from 'react-native';
import React from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Card,CardItem} from 'native-base';
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
        name:'',
        email:'',
        password:'',
        errorMessage:null
    }

    handleSignUp = () => {
        
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(userCredentials => {
                    return userCredentials.user.updateProfile({
                        displayName:this.state.name
                    });
                })
                .catch(error=>this.setState({errorMessage:error.message}));
    };

    // onLogin = async ()=> {

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

    // //     if(this.state.firstname=='Dushyant'&&this.state.lastname=='Reddy'&&this.state.email=='dushireddy291@gmail.com'&&this.state.password=='12345'){
    // //         this.props.navigation.navigate("Dashboard")
    // //  }else{
    // //      this.setState({errMsg:'Invalid SignUp Details, Try Again!'})
    // //  }
    // }

    checkBoxTest(){
        this.setState({
          check:!this.state.check
        })
        alert("Aggrement is "+!this.state.check)
      }

    render(){
        return(
            <View style={styles.container}>
                
                <Text 
          style={{fontSize:25,
              fontWeight:"bold",
              color:"#ECB9BD",
              textAlign:"center",
              paddingBottom:40,
              paddingTop:10,
              }}>SIGN UP TO CONTINUE</Text>
              
              {/* <Animatable.View ref={this.validateInput} > */}
              <TextInput 
                    style={{marginTop:40,borderBottomColor:'#ddd',borderBottomWidth:1,paddingBottom:20}} 
                    placeholder="Username"  
                    onChangeText={name =>this.setState({name})}
                    value={this.state.name}        
                        
                          
                />
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

               

                    {/* <Text style={{color:'red',textAlign:'center',marginTop:10}}>{this.state.errMsg}</Text> */}

                 <CardItem>
                  <CheckBox style={{}}value={this.state.check} onChange={()=>this.checkBoxTest()}/>
                  <Text style={{fontSize:18}}>I accept the Terms of Service</Text>
                 </CardItem>

                <View style={{alignItems:'center',justifyContent:'center',marginTop:40}}>
                  <TouchableOpacity 
                    //   onPress={()=> this.handleSignUp()}
                    onPress={()=> this.props.navigation.navigate('Dashboard')} 
                      style={{width:200,backgroundColor:'#ECB9BD',padding:10,alignItems:'center',justifyContent:'center',borderRadius:40,marginTop:10}}>
                    <Text style={{textAlign:'center',color:'#fff',fontSize:16}}>Sign Up</Text>
                  </TouchableOpacity>

                  
                  <View style={{flexDirection:'row',marginTop:80}}>
                    <Text style={{color:'gray'}}>Already have an Account? </Text>
                    <Text style={{fontSize:15,color:"#ECB9BD",fontWeight:'bold'}} onPress={()=> this.props.navigation.navigate('SignIn')}>Sign In</Text>
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


