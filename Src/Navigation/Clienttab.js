import * as  React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { colors } from "../Global/Styles";
import Homescreen from '../Screens/Homescreen'
import Searchscreen from'../Screens/Searchscreen'
import Myorderscreen from '../Screens/Myorderscreen'
import Myaccountscreen from '../Screens/Myaccountscreen'
import Clientstack from "./Clientstack";

const Clienttab = createBottomTabNavigator();

export default function Rootclienttab(){
    return(
        <Clienttab.Navigator
        tabBarOptions={{
            activeTintColor:colors.buttons
        }}
        >
            <Clienttab.Screen
            name='Homescreen'
            component={Homescreen}
            options={{
                headerShown:false,
                tabBarLabel:'Home',
                tabBarIcon:({color,size})=>(
                    <Icon
                    name="home"
                    type="material"
                    color={color}
                    size={size}
                    />
                )
            }}
            />
              <Clienttab.Screen
            name='seacrchscreen'
            component={Clientstack}
            options={{
                headerShown:false,
                tabBarLabel:'search',
                tabBarIcon:({color,size})=>(
                    <Icon
                    name="search"
                    type="material"
                    color={color}
                    size={size}
                    />
                )
            }}
            />
               <Clienttab.Screen
            name='Myorderscreen'
            component={Myorderscreen}
            options={{
                headerShown:false,
                tabBarLabel:'Myorder',
                tabBarIcon:({color,size})=>(
                    <Icon
                    name="view-list"
                    type="material"
                    color={color}
                    size={size}
                    />
                )
            }}
            />
               <Clienttab.Screen
            name='Myaccountscreen'
            component={Myaccountscreen}
            options={{
                headerShown:false,
                tabBarLabel:'Myaccount',
                tabBarIcon:({color,size})=>(
                    <Icon
                    name="person"
                    type="material"
                    color={color}
                    size={size}
                    />
                )
            }}
            />
            
        </Clienttab.Navigator>
    )
}