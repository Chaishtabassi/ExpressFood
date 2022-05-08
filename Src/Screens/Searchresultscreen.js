import { Dimensions, StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import Searchresultcard from '../Components/Searchresultcard'
import { restaurentData } from '../Global/Data';
import { colors } from '../Global/Styles';
import { productdata } from '../Global/Data';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Searchresultscreen({navigation,route}) {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.listheader}>{restaurentData.length} Result For {route.params.item}</Text>
      </View>
      <View>
      <FlatList
         style={{backgroundColor:colors.cardbackground}}
         data={restaurentData}
         keyExtractor={(item,index)=>index.toString()}
         renderItem={(item,index)=>(
          <Searchresultcard
          Screenwidth={SCREEN_WIDTH}
          images={restaurentData[0].images}
          averagereview={restaurentData[0].averagereview}
          numberofreview={restaurentData[0].numberofreview}
          resturentname={restaurentData[0].resturentname}
          faraway={restaurentData[0].faraway}
          businessaddress={restaurentData[0].businessaddress}
          productdata={restaurentData[0].productdata}
          OnPressResturentCard={()=>{navigation.navigate('Resturenthome')}}
          />
           )}
         />
      </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    listheader:{
       color:colors.grey1,
       fontSize:20,
       paddingHorizontal:10,
       paddingVertical:10,
       fontWeight:'bold',
    }
})