import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../Global/Styles'

const Productcard = ({resturentname,price,image}) => {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
         <View style={styles.view3}>
          <Text style={styles.text2}>{resturentname}</Text>
          <Text style={styles.text1}> ZAR{price}</Text>
         </View>
         <View style={styles.view4}>
             <Image style={styles.image} source={{uri:image}}/>
         </View>
      </View>
    </View>
  )
}

export default Productcard
const styles = StyleSheet.create({
    view1:{
      elevation:4,
      backgroundColor:'white',
      shadowOpacity:0.4,
      shadowColor:'black',
       margin:5,
       width:210,
        padding:10,
    },
    view2:{
        flexDirection:'row',
        padding:10,
        justifyContent:'space-between',
    },
    view3:{
      justifyContent:'space-between',
      width:110,
    },
    text1:{
        fontSize:15,
        color:colors.grey1,
    },
    view4:{
        height:65,
       width:75,
    },
    image:{
       height:65,
       width:75,
    },
    text2:{
        fontSize:15,
        color:colors.grey1,
    }
})