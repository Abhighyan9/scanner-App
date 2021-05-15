import {View,Text, TouchableOpacity} from 'react-native';
import React from "react";
import * as firebase from "firebase";

export default class LogoutScreen extends React.Component{
    state = {
        email:"",
        displayName:""
    };

    componentDidMount(){
        const {email,displayName} = firebase.auth().currentUser;
        this.setState({email,displayName});
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }
    render(){

        this.props.navigation.setOptions({
            headerBackTitle:'',
            headerShown: false
        })
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:"#fff"}}>
               <Text>This is LogoutScreen</Text>
               
               <Text>Hi { this.state.email}!</Text>
               <TouchableOpacity style={{marginTop:32}} onPress={this.signOutUser}>
                  <Text>Logout</Text>
               </TouchableOpacity> 
               {/* <Button title="Logout" onPress={()=> this.props.navigation.navigate('Home')}></Button>    */}
            </View>
        )
    }

}