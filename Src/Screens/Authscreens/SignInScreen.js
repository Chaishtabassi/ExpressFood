import { Text, View ,StyleSheet, Dimensions, TextInput, ScrollView} from 'react-native'
import React, { Component,useState,useRef } from 'react'
import  Header from '../../Components/Header'
import {colors,parameters } from '../../Global/Styles'
import { Button, Icon, SocialIcon } from 'react-native-elements'
import { title } from '../../Global/Styles'
import * as Animatable from 'react-native-animatable'

export default function SignInScreen({navigation}){


     const [textinput2Focussed,settextinput2Focussed]=useState(false)

     const textinput1=useRef(1)
     const textinput2=useRef(2)

    return(
        <ScrollView>
        <View style={styles.container}>
            <Header title='My Account' type ='arrow-left' navigation={navigation}/>

            <View style={{marginLeft:20,marginTop:10}}>
                <Text style={title}> Sign In </Text>
            </View>

            <View style={{alignItems:'center',marginTop:10}}>
                <Text style={styles.text1}> Please enter the email and password </Text>
                <Text style={styles.text1}> register with your account  </Text>
            </View>

            <View>
                <View style={{marginTop:20}}>
                    <TextInput
                    style={styles.textinput1}
                    placeholder='Email'
                    ref={textinput1}
                    onFocus={()=>{
                        settextinput2Focussed(false)
                    }}
                    onBlur={()=>{
                        settextinput2Focussed(true)
                    }}
                    />
                </View>


                <View style={styles.textinput2}>
                <Animatable.View  animation={textinput2Focussed?'':'fadeInLeft'} duration={400}>
                    <Icon
                    name='lock'
                    iconStyle={{color:colors.grey3}}
                    type='material'
                    />
                </Animatable.View>
                <TextInput
                style={{width:'80%'}}
                    placeholder='Password'
                    ref={textinput2}
                    />

                <Animatable.View  animation={textinput2Focussed?'':'fadeInLeft'} duration={400}>
                <Icon
                    name='visibility-off'
                    iconStyle={{color:colors.grey3}}
                    type='material'
                    style={{marginRight:10}}
                    />
                </Animatable.View>
                </View>

            </View>

            <View style={{marginHorizontal:20,marginTop:30}}>
                <Button
                 title='Sign In '
                buttonStyle={parameters.styledButton}
                titlestyle={parameters.buttontitle}
                onPress={()=>{ navigation.navigate('Rootclienttab') }}
                />
            </View>

            <View style={{alignItems:'center',marginTop:10}}>
                <Text style={{...styles.text1, textDecorationLine:'underline'}}> Forget Password? </Text>
            </View>

            <View style={{alignItems:'center', marginTop:30,marginBottom:30}}>
                <Text style={{fontSize:20, fontWeight:'bold',color:'black'}}>Or</Text>
            </View>

            <View  style={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon
                  title='Sign In  with Facebook'
                  button
                  type='facebook'
                  style={styles.SocialIcon}
                  onPress={()=>{}}
                />
            </View>

            <View style={{marginHorizontal:20,marginTop:30}}>
                <SocialIcon
                 title='Sign In  with Google'
                 button
                 type='google'
                 style={styles.SocialIcon}
                 onPress={()=>{}}
                />
            </View>
           
            <View style={{marginLeft:20,marginTop:25}}>
                <Text style={{...styles.text1, textDecorationLine:'underline'}}> New on XPress Food? </Text>
            </View>

            <View style={{alignItems:'flex-end',marginHorizontal:20}}>
                <Button
                title='create an account '
                buttonStyle={styles.createButton}
                titleStyle={styles.createButtonTitle}
                />
            </View>

        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text1:{
     color:colors.grey4,
     fontSize:16,
    },
    textinput1:{
      borderWidth:1,
      borderColor:'#86939e',
      marginHorizontal:20,
      borderRadius:12,
      marginBottom:20,
      paddingLeft:15,
    },
    textinput2:{
     borderWidth:1,
     borderRadius:12,
     marginHorizontal:20,
     borderColor:'#86939e',
     flexDirection:'row',
     justifyContent:'space-between',
     alignContent:'center',
     alignItems:'center',
     paddingLeft:15
    },
    createButton:{
        backgroundColor:'white',
        // alignItems:'centre',
        // justifyContent:'centre',
        borderRadius:12,
        borderColor:'#ff8c52',
        borderWidth:1,
        height:40,
        paddingHorizontal:20

    },
    createButtonTitle:{
       color:'#ff8c52',
       fontSize:16,
       fontWeight:'bold',
    //    alignItems:'centre',
    //    justifyContent:'centre',
       marginTop:-3,
    },

})