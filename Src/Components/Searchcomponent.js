import { View, Text,StyleSheet,TouchableWithoutFeedback ,Modal,TextInput,FlatList, Keyboard} from 'react-native'
import React,{useState,useRef} from 'react'
import * as  Animatable from 'react-native-animatable';
import { colors, Icon } from 'react-native-elements'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { filterData } from '../Global/Data';
import { filter } from 'lodash';

export default function Searchcomponent() {

   const navigation = useNavigation()

   const [data,setdata]= useState([...filterData])
    const [modalVisible,setmodalVisible]=useState(false)
    const[textinputFossued, setinputtextfossued]=useState(true)
    const textInput=useRef(0)


    const contains=({name},query)=>{
        if(name.includes(query)){
            return true
        }
        return false
    }

    const handleSearch = text=>{
        const dataS= filter(filterData,userSearch=>{
            return contains(userSearch,text)
        })
        setdata([...dataS])
    }

  return (
    <View style={{alignItems:'center'}}>    
      <TouchableWithoutFeedback
      onPress={()=>{
          setmodalVisible(true)
      }}
      >
          <View style={styles.searcharea}>
              <Icon
              name='search'
              style={styles.searchicon}
              type='material'
              iconStyle={{marginLeft:5}}
              size={32}
              />
              <Text style={{fontSize:15 ,color:'black'}}> What are you looking for? </Text>
          </View>
      </TouchableWithoutFeedback>
      <Modal
      animationType='fade'
      transparent={false}
      visible={modalVisible}
      >
        <View style={ styles.modal}>
          <View style={styles.view1}>
              <View style={styles.textinput}>
                <Animatable.View
                 animation={textinputFossued?'fadeInRight':'fadeInLeft'}
                 duration={400}
                >
                    <Icon
                    name={textinputFossued?'arrow-back':'search'}
                    onPress={()=>{
                        if (textinputFossued) 
                        setmodalVisible(false)
                        setinputtextfossued(true)
                    }}
                    style={styles.icon2}
                    type='material'
                    iconStyle={{marginRight:5}}
                    />
                </Animatable.View>
                <TextInput
                style={{width:'90%'}}
                placeholder=''
                autoFocus={false}
                ref={textInput} 
                
                onFocus={()=>{
                    setinputtextfossued(true)
                }}

                onBlur={()=>{
                    setinputtextfossued(false)
                }}
                onChangeText={handleSearch}
                />
                <Animatable.View
                  animation={textinputFossued?'fadeInLeft':'fadeInRight'}
                  duration={400}
                >
                    <Icon
                    name={textinputFossued?'cancel':null}
                    iconStyle={{color:colors.grey3}}
                    type='material'
                    style={{marginRight:10,fontSize:24}}
                    onPress={()=>{
                        textInput.current.clear()
                        // handleSearch()
                    }}
                    />
                </Animatable.View>
              </View>
          </View>
        
         <FlatList
        data={data}
        renderItem={({item})=>(
            <TouchableOpacity
            onPress={()=>{
            Keyboard.dismiss
            navigation.navigate('Searchresultscreen',{item:item.name}) 
            setmodalVisible(false)
            settextinputfossued(true)
            }}
            >
          <View style={styles.view2}>
              <Text style={{color:colors.grey2,fontSize:15}}> {item.name}</Text>
          </View>
            </TouchableOpacity>
        )}
        keyExtractor={item=>item.id}
        /> 
        </View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text1:{
        color:colors.grey1,
        fontSize:16,
    },
    textinput:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'#86939e',
        flexDirection:'row',
       justifyContent:'space-evenly',
       alignItems:'center',
        paddingLeft:10,
        paddingHorizontal:10,
    },
    searchicon:{
        fontSize:24,
        padding:5,
        color:colors.grey2,
    },
    view1:{
        height:50,
       paddingHorizontal:10,
       justifyContent:'center',
       paddingTop:13,
    },
    view2:{
      flexDirection:'row',
      alignItems:'center',
      padding:10,
    },
    icon2:{
        fontSize:24,
        padding:5,
        color:colors.grey2,
    },
    searcharea:{
        marginTop:10,
        width:'94%',
        height:50,
        backgroundColor:colors.grey5,
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.grey4,
        flexDirection:'row',
        alignItems:'center',
    },
    modal:{
        flex:1,
    }
})