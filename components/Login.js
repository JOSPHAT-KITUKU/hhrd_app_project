import React, {useEffect, useState} from "react";
import {View, Text, Button, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {firebase} from '../config';
import Register from "./Register";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function Login(){
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const loginUser = async(email,password) =>{
        try{
            await firebase.auth().signInWithEmailAndPassword(email,password);
            const user = firebase.auth().currentUser;
        }catch(error){
            console.log(error.message);
            alert("Error! Either your email/password is wrong or Account doesnt exist");
        }
    }
    return(
        <View style={styles.container}>
            <StatusBar hidden/>
            <FontAwesome name="user-circle-o" size={100} color="#00bfff" />
            <View style={{marginTop:20}}>
                <View style={{display:"flex", flexDirection:"row"}}>
                    <View style={styles.icons}>
                        <MaterialCommunityIcons name="email" size={16} color="#00bfff" />
                    </View>

                    <View style={styles.textInpView}>
                        <TextInput
                        style={styles.txtInpt}
                        placeholder="Email"
                        onChangeText={(email)=>setEmail(email)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        />
                    </View>
                </View>
                <View style={{display:"flex", flexDirection:"row"}}>
                    <View style={styles.icons}>
                        <FontAwesome5 name="key" size={16} color="#00bfff" />
                    </View>

                    <View style={styles.textInpView}>
                        <TextInput
                                style={styles.txtInpt}
                                placeholder="Password"
                                onChangeText={(password)=>setPassword(password)}
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                            />
                     </View>
                </View>
            </View>
            <TouchableOpacity
            onPress={()=>loginUser(email,password)}
            style={styles.button}
            >
                <Text style={{fontWeight:"bold", fontSize:22, color:"#fff"}}>Login</Text>
            </TouchableOpacity>
             <TouchableOpacity
            onPress={()=>navigation.navigate("Register")}
            style={{marginTop:20}}
            >
                <View style={{flexDirection:"row"}}>
                    <Text style={{fontWeight:"bold", fontSize:18, marginTop:7, marginRight:10, color:"orange"}}>Don't have an Account?</Text>
                    <Text style={{color:"#00bfff",fontSize:25}}>Register</Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("PasswordResetForm")}>
                <Text style={{color:"green", marginTop:20, fontSize:18}}>Forgoten Password? Reset</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:60,
        alignItems:"center",
    },
    txtInpt:{
        borderBottomWidth:2,
        borderBottomColor:"#00bfff",
        paddingTop:20,
        paddingBottom:10,
        width:300,
        fontSize:20,
        marginBottom:10,
        marginLeft:-40,
        paddingLeft:30
    },
    button:{
        backgroundColor:"#00bfff",
        marginTop:30,
        height:40,
        width:150,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
    },
    icons:{
        marginLeft:0,
        paddingTop:30,
    },
    textInpView:{
        marginLeft:20
    }
})
