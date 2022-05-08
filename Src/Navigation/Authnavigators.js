import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import SignInWelcomeScreen from "../Screens/Authscreens/SignInWelcomeScreen";
import SignInScreen from "../Screens/Authscreens/SignInScreen";
import Resturentmapscreen from "../Screens/Resturentmapscreen";
import Rootclienttab from "./Clienttab";

const Auth=createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            <Auth.Screen
            name='SignInWelcomeScreen'
            component={SignInWelcomeScreen}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
              <Auth.Screen
            name='SignInScreen'
            component={SignInScreen}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
               <Auth.Screen
            name='Rootclienttab'
            component={Rootclienttab}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
              <Auth.Screen
            name='Resturentmapscreen'
            component={Resturentmapscreen}
            options={{
                headerShown:false,
                ...TransitionPresets.RevealFromBottomAndroid
            }}
            />
           
        </Auth.Navigator>
    )
}