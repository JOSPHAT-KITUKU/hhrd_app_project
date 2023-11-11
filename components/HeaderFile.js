import { StatusBar } from "expo-status-bar";
import React from "react";
import {Text, View} from 'react-native';

function HeaderFile(props){
    return(
        <View>
            <StatusBar hidden/>
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={{fontWeight:"bold", fontSize:28, color:"#fff"}}>{props.name}</Text>
            </View>
        </View>
    )
}

export default HeaderFile;
