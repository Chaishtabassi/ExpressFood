import { Text, View,StyleSheet,StatusBar } from 'react-native'
import React, { Component } from 'react' 
import { colors } from './Src/Global/Styles'
import Rootnavigator from './Src/Navigation/Rootnavigator'
export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
        barStyle='light-content'
        backgroundColor={colors.StatusBar}
        />
        <Rootnavigator/>
      </View>
    )
  }
}

export default App
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})