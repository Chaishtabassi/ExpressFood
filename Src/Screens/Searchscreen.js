import React from "react";
import { View,Text,StyleSheet, ImageBackground, Dimensions } from "react-native";
import { colors } from "react-native-elements";
import { FlatList, TouchableWithoutFeedback } from "react-native-gesture-handler";
import Searchcomponent from "../Components/Searchcomponent";
import { filterData } from "../Global/Data";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Searchscreen({navigation}){
    return(
        <View style={{marginBottom:10}}>
          <Searchcomponent/>
          <View>
            <FlatList
            style={{marginBottom:1}}
            data={filter2}
            keyExtractor={item=>item.id}
            renderItem={({item,index})=>(
              <TouchableWithoutFeedback
              onPress={()=>{
                navigation.navigate('Searchresultscreen',{item:item.name})
            }}
              >
                <View style={styles.imageview}>
                  <ImageBackground
                   style={styles.image}
                   source={item.image}
                  >
                    <View style={styles.textview}>
                      <Text style={{color:colors.cardbackground}}>{item.name}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            )}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ListHeaderComponent={<Text style={styles.listheader}> Top categories </Text>}
            ListFooterComponent={<Footer/>}
            />
          </View>
        </View>
    )
}


const Footer=()=>{
  return(
    <View style={{flex:1,marginBottom:10}}>
    <View>
      <FlatList
      style={{marginBottom:10}}
      data={filter2}
      keyExtractor={item=>item.id}
      renderItem={({item,index})=>(
        <TouchableWithoutFeedback
        onPress={()=>{
            navigation.navigate('Searchresultscreen',{item:item.name})
        }}
        >
          <View style={styles.imageview}>
            <ImageBackground
             style={styles.image}
             source={item.image}
            >
              <View style={styles.textview}>
                <Text style={{color:colors.cardbackground}}>{item.name}</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      )}
      horizontal={false}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      ListHeaderComponent={<Text style={styles.listheader}> More categories </Text>}
      />
    </View>
  </View>

  )
}


const styles = StyleSheet.create({
  imageview:{
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    width:SCREEN_WIDTH*0.4475,
    height:SCREEN_WIDTH*0.4475,
    marginLeft:SCREEN_WIDTH*0.035,
    marginBottom:SCREEN_WIDTH*0.035,
  },
  image:{
    height:SCREEN_WIDTH*0.4475,
    width:SCREEN_WIDTH*0.4475,
    borderRadius:10,
  },
  listheader:{
    fontSize:16,
    color:colors.grey2,
    paddingBottom:10,
    marginLeft:12,
  },
  textview:{
    height:SCREEN_WIDTH*0.4475,
    width:SCREEN_WIDTH*0.4475,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(52,52,52,0.3)'
  },
})