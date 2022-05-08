import React, { useState } from "react";
import { View,Text,StyleSheet,FlatList ,Pressable,Image, Dimensions} from "react-native";
import { Icon } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Homeheader from "../Components/Homeheader";
import CountDown from "react-native-countdown-component";
import { colors,parameters } from "../Global/Styles";
import { filterData,restaurentData } from "../Global/Data";
import Foodcard from "../Components/Foodcard";

const SCREEN_WIDTH= Dimensions.get('window').width

export default function Homescreen({navigation}){

   const [Delivery,Setdelivery]=useState(true)
   const[indexcheck,setindexcheck]=useState('0')

    return(
        <View style={styles.container}>
        <Homeheader/>
        
        <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={true}
        >
  <View style={{backgroundColor:colors.cardbackground,paddingBottom:5}}>
        <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-evenly'}}>
            <TouchableOpacity
            onPress={()=>{
                Setdelivery(true)
            }}
            >
                <View style={{...styles.deliverybutton,backgroundColor:Delivery?colors.buttons:colors.grey5}}>
                  <Text style={styles.deliverytext}> Delivery </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={()=>{
                Setdelivery(false)
                navigation.navigate('Resturentmapscreen')
            }}
            >
                <View style={{...styles.deliverybutton,backgroundColor:Delivery?colors.grey5:colors.buttons}}>
                  <Text style={styles.deliverytext}> Pickup</Text>
                </View>
            </TouchableOpacity>

        </View>
        </View>

    <View style={styles.filterview}>
     <View style={styles.addresview}>
            <View style={{flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
                />
                <Text style={{marginLeft:5,color:'black'}}> 22 Bessie Street</Text>
            </View>

            <View style={styles.clockview}>
                <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
                />
                <Text style={{marginLeft:5,color:'black'}}> Now </Text>
            </View>
        </View>
        <View>
        <Icon
                type="material-community"
                name="tune"
                color={colors.grey1}
                size={26}
                />   
        </View>

     </View>

     <View style={styles.headertextview}>
         <Text style={styles.headertext}> Categories </Text>
     </View>

     <View>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
             data={filterData}
             keyExtractor={(item)=>item.id}
             extraData={indexcheck}
             renderItem={({item,index})=>(
                  <Pressable
                  onPress={()=>{
                      setindexcheck(item.id)
                  }}
                  >
                      <View style={indexcheck === item.id?{...styles.smallcardselected}:{...styles.smallcard}}>
                              <Image
                              style={{height:60,width:60,borderRadius:30}}
                              source={item.image}
                              />
                              <View>
                                  <Text style={indexcheck === item.id?{...styles.smallcardtextselected}:{...styles.smallcardtext}}>{item.name} </Text>
                              </View>
                      </View>
                  </Pressable>
             )}
        />
     </View>

     <View style={styles.headertextview}>
         <Text style={styles.headertext}> Free Delivery Now  </Text>
     </View>

     <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{marginLeft:15,fontSize:16,marginTop:-10,marginRight:5,color:'black'}}> Option Changing In</Text>
            <CountDown
            until={3600}
            size={14}
            digitStyle={{backgroundColor:colors.lightgreen}}
            digitTxtStyle={{color:colors.cardbackground}}
            timeToShow={['M','S']}
            timeLabels={{m:'Min',s:'sec'}}
            />
     </View>

     <View>
         <FlatList
         style={{marginTop:10,marginBottom:10}}
         horizontal={true}
         data={restaurentData}
         keyExtractor={(item,index)=>index.toString()}
         showsHorizontalScrollIndicator={false}
         renderItem={({item})=>(
             <View style={{marginRight:5}}>
                 <Foodcard
                 screenwidth={SCREEN_WIDTH*0.8}
                 images={item.images}
                 resturentname={item.resturentname}
                 faraway={item.faraway}
                 businessadress={item.businessaddress}
                 averagereviews={item.averagereview}
                 numberofreviews={item.numberofreview}
                 />
                 </View>
         )}
         />
     </View>


     <View style={styles.headertextview}>
         <Text style={styles.headertext}> Promotion Available </Text>
     </View>

     <View>
         <FlatList
         style={{marginTop:10,marginBottom:10}}
         horizontal={true}
         data={restaurentData}
         keyExtractor={(item,index)=>index.toString()}
         showsHorizontalScrollIndicator={false}
         renderItem={({item})=>(
             <View style={{marginRight:5}}>
                 <Foodcard
                 screenwidth={SCREEN_WIDTH*0.8}
                 images={item.images}
                 resturentname={item.resturentname}
                 faraway={item.faraway}
                 businessadress={item.businessaddress}
                 averagereviews={item.averagereview}
                 numberofreviews={item.numberofreview}
                 />
                 </View>
         )}
         />
     </View>

     <View style={styles.headertextview}>
         <Text style={styles.headertext}> restaurent In Your  Area  </Text>
     </View>

     <View style={{width:SCREEN_WIDTH,paddingTop:10}}>
     {
         restaurentData.map(item=>(
             <View key={item.id} style={{paddingBottom:20}}>
                        <Foodcard
                 screenwidth={SCREEN_WIDTH*0.95}
                 images={item.images}
                 resturentname={item.resturentname}
                 faraway={item.faraway}
                 businessadress={item.businessaddress}
                 averagereviews={item.averagereview}
                 numberofreviews={item.numberofreview}
                 />
                 </View>
         ))
     }
     </View>

        </ScrollView>
    { Delivery&&
        <View style={styles.floatingbutton}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Resturentmapscreen')
            }}>
                <Icon
                name="place"
                type="material"
                size={32}
                color={colors.buttons}
                />
                <Text style={{color:colors.grey2}}> Map </Text>
            </TouchableOpacity>
        </View>
        }
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    deliverybutton:{
        paddingHorizontal:20,
        borderRadius:15,
        paddingVertical:5,
    },
    deliverytext:{
      marginLeft:5,
      fontSize:16,
      color:'black',
    },
    filterview:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginHorizontal:10,
    marginVertical:10
},
clockview:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:20,
    backgroundColor:colors.cardbackground,
    paddingHorizontal:5,
    marginRight:20
},
addresview:{
    flexDirection:'row',
    backgroundColor:colors.grey4,
    borderRadius:15,
    paddingVertical:3,
    justifyContent:'space-between',
    paddingHorizontal:20
},
headertext:{
  color:colors.grey1,
  fontSize:22,
  fontWeight:'bold',
  paddingLeft:10,
},
headertextview:{
    backgroundColor:colors.grey5,
    paddingVertical:3
},
smallcard:{
   borderRadius:20,
   backgroundColor:colors.grey5,
   justifyContent:'center',
   alignItems:'center',
   padding:5,
   width:80,
   margin:10,
   height:100
},
smallcardselected:{
    borderRadius:20,
    backgroundColor:colors.buttons,
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    width:80,
    margin:10,
    height:100
},
smallcardtext:{
   fontWeight:'bold',
   color:colors.grey2
},
smallcardtextselected:{
    fontWeight:'bold',
    color:colors.cardbackground
 },
 floatingbutton:{
     position:'absolute',
     bottom:10,
     right:15,
     backgroundColor:'white',
     elevation:10,
     width:60,height:60,
     borderRadius:30,
     alignItems:'center',
 }
})