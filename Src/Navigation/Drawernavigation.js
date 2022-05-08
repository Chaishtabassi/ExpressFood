import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Rootclienttab from '../Navigation/Clienttab'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Icon } from 'react-native-elements'
import { colors } from 'react-native-elements'

const Drawer = createDrawerNavigator()

const Drawernavigation = () => {
  return (
   <Drawer.Navigator>
       <Drawer.Screen 
       name=' Rootclienttab'
       component={ Rootclienttab}
       options={{
           title:'client',
           drawerIcon:({focussed,size})=>(
               <Icon
               type='material-community'
               name='home'
               color={focussed?'#7cc': colors.grey2}
               size={size}
               />
           )
       }}
       />
   </Drawer.Navigator>
  )
}

export default Drawernavigation

const styles = StyleSheet.create({})