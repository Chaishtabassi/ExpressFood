import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Icon,withBadge } from "react-native-elements";
import { colors,parameters } from "../Global/Styles";

export default function Homeheader(){
    const BadgeIcon = withBadge(0)(Icon)
    return(
        <View style={styles.header}>

           <View style={{alignItems:'center',justifyContent:'center',marginLeft:15}}>
             <Icon
             type="material-community"
             name="menu"
             color={colors.cardbackground}
             size={32}
             />
           </View>

           <View style={{alignItems:'center',justifyContent:'center'}}>
               <Text style={{color:colors.cardbackground,fontSize:23,fontWeight:'bold'}}> XPress Food </Text>
           </View>

           <View  style={{alignItems:'center',justifyContent:'center',marginRight:15}}>
               <BadgeIcon
               name='cart'
               type='material-community'
               size={35}
               color={colors.cardbackground}
               />
           </View>

        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
       backgroundColor:colors.buttons,
       height:parameters.headerHeight,
       justifyContent:'space-between'
    },
})