import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator,TransitionPresents } from '@react-navigation/stack'
import Searchscreen from '../Screens/Searchscreen'
import Searchresultscreen from '../Screens/Searchresultscreen'
import Resturenthome from '../Screens/Resturenthome'

const clientsearch=createStackNavigator()

export default function Clientstack() {
  return (
     <clientsearch.Navigator>
         <clientsearch.Screen
         name='Searchscreen'
         component={Searchscreen}
         options={ ()=>({
           headerShown:false
         })
         }
         />
           <clientsearch.Screen
         name='Searchresultscreen'
         component={Searchresultscreen}
         options={ ()=>({
           headerShown:false
         })
         }
         />
           <clientsearch.Screen
         name='Resturenthome'
         component={Resturenthome}
         options={ ()=>({
           headerShown:false
         })
         }
         />
     </clientsearch.Navigator>
  )
}

const styles = StyleSheet.create({})