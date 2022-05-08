import React, { useState } from "react";
import { View,Text,StyleSheet,FlatList ,Pressable,Image} from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors,parameters } from "../Global/Styles";


export default function Foodcard({
    OnPressFoodCard,
   resturentname,
   deliveryavailable,
   discountpercent,
   discountavailable,
   numberofreviews,
   businessadress,
   faraway,
   averagereviews,
   images,
   screenwidth
}){
    return(
        <TouchableOpacity>
        <View style={{...styles.cardview,width:screenwidth}}>
            <Image
            style={{...styles.image,width:screenwidth}}
            source={{uri:images}}
            />
          <View>
            <View>
                <Text style={styles.resturentnames}>{resturentname}</Text>
            </View>
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={styles.distance}>
                   <Icon
                   name="place"
                   type="material"
                   color={colors.grey2}
                   size={18}
                   iconStyle={{marginTop:3}}
                   />
                   <Text style={styles.min}> {faraway} min</Text>
                </View>

                <View style={{flex:9,flexDirection:'row'}}>
                   <Text style={styles.adress}> {businessadress}</Text>
                </View>
            </View>
        </View>
     </View>
      
        <View style={styles.review}>
          <Text style={styles.average}> {averagereviews}</Text>
          <Text style={styles.numberofrevie}> { numberofreviews} review</Text>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    cardview:{
     marginHorizontal:9,
     borderTopRightRadius:5,
     borderTopLeftRadius:5,
     borderWidth:1,
     borderColor:colors.grey4,
     borderBottomLeftRadius:5,
     borderBottomRightRadius:5,
    },
    image:{
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        height:150
    },
    resturentnames:{
     fontSize:17,
     fontWeight:'bold',
     color:colors.grey1,
     marginTop:5,
     marginLeft:10
    },
    distance:{
      flex:4,
      flexDirection:'row',
      borderRightColor:colors.grey4,
      paddingHorizontal:5,
      borderRightWidth: 1
    },
    min:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
     color:colors.grey3,
    },
    adress:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
     color:colors.grey3,
    },
    review:{
    position:'absolute',
    top:0,
    right:10,
    backgroundColor:'rgba(52,52,52,0.3)',
    padding:2,
    alignItems:'center',
    justifyContent:'center',
    borderTopRightRadius:5,
    borderBottomLeftRadius:12,

    },
    average:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginTop:-3
    },
    numberofrevie:{
    color:'white',
    fontSize:13,
    marginRight:0,
    marginLeft:0
    },
})