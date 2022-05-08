import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./Authnavigators";

export default function Rootnavigator(){
    return(
        <NavigationContainer>
           <AuthStack/>
        </NavigationContainer>
     )
}