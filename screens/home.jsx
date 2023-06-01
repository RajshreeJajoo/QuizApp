import { StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quizller App</Text>
      <View style={{flex:1}}>
      <Image style={{width:'100%' ,height:'80%'}} source={require('../assests/Image1.png')}/>

      </View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Quiz")}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        height:'100%'
    },
    button:{
        paddingVertical:8,
        alignItems:'center',
        backgroundColor:'#AE50F5',
        borderRadius:12,
        marginBottom:20
    },
    buttonText:{
        padding:8,
        color:'white',
        fontSize:22,
        fontWeight:'600'
    },
    header:{
        fontSize:26,
        textAlign:'center',
        fontWeight:'600',
        paddingVertical:'20%'
    }
})