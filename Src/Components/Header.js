import { Text, View ,StyleSheet, Dimensions} from 'react-native'
import React, { Component } from 'react'
import {colors,parameters } from '../Global/Styles'
import { Icon } from 'react-native-elements'

export default function Header ({title,type,navigation}){
    return (
      <View style={styles.header}>
          <View style={{marginLeft:20}}>
       <Icon
       type='material-community'
       name={type}
       color={colors.headertext}
       size={28}
       onPress={()=>{
         navigation.goBack()
       }}
       />
       </View>
       <View>
         <Text style={styles.headertext}> {title }</Text>
       </View>
      </View>
    )
  
}

const styles = StyleSheet.create({
    header:{
       backgroundColor:colors.buttons,
       flexDirection:'row',
       height:parameters.headerHeight
    },
    headertext:{
     color:colors.headertext,
     fontSize:22,
     fontWeight:'bold',
     marginLeft:30,
    },
})