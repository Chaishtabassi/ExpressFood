import { Text, View ,StyleSheet, Dimensions, TextInput, ScrollView,Image} from 'react-native'
import React, { Component,useState,useRef } from 'react'
import  Header from '../../Components/Header'
import {colors,parameters } from '../../Global/Styles'
import { Button, Icon, SocialIcon } from 'react-native-elements'
import { title } from '../../Global/Styles'
import Swiper from 'react-native-swiper'
import * as Animatable from 'react-native-animatable'

export default function SignInWelcomeScreen({navigation}){
    return(
        <View style={{flex:1}}>

            <View style={{flex:3,justifyContent:'flex-start',alignItems:'center',paddingTop:20}}>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}> DISCOVER RESTAURENT </Text>
                <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}> IN YOUR AREA</Text>
            </View>


            <View style={{flex:4,justifyContent:'center'}}>
              <Swiper autoplay={true}>
                  <View style={styles.slide1}>
                      <Image
                      source={require('../../../Assets/dish1.jpg')}
                      style={{height:250,width:520}}
                      />
                  </View>
                  <View style={styles.slide2}>
                      <Image
                      source={require('../../../Assets/dish2jpg.webp')}
                      style={{height:250,width:520}}
                      />
                  </View>
                  <View style={styles.slide3}>
                      <Image
                      source={require('../../../Assets/dish3.jpg')}
                      style={{height:250,width:520}}
                      />
                  </View>
                  <View style={styles.slide4}>
                      <Image
                      source={require('../../../Assets/dish4.webp')}
                      style={{height:250,width:520}}
                      />
                  </View>
              </Swiper>
            </View>

            <View style={{flex:4,justifyContent:'flex-end',marginBottom:20}}>
            <View style={{marginHorizontal:20,marginTop:30}}>
                <Button
                 title='Sign In '
                buttonStyle={parameters.styledButton}
                titlestyle={parameters.buttontitle}
                onPress={()=>{
                   navigation.navigate('SignInScreen')
                }}
                />
            </View>

            
            <View style={{marginHorizontal:20,marginTop:15}}>
                <Button
                title='create an account '
                buttonStyle={styles.createButton}
                titleStyle={styles.createButtonTitle}
                />
            </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9DD6E8'
    },
    slide2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#97CAES'
    },
    slide3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9288D9'
    },
    slide4:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    createButton:{
        backgroundColor:'white',
        // alignItems:'centre',
        // justifyContent:'centre',
        borderRadius:12,
        borderColor:'#ff8c52',
        borderWidth:1,
        height:40,
        paddingHorizontal:20,
        borderColor:colors.buttons
    },
    createButtonTitle:{
       color:colors.grey1,
       fontSize:20,
       fontWeight:'bold',
    //    alignItems:'centre',
    //    justifyContent:'centre',
       marginTop:-3,
    },
})