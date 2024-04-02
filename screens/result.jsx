import { StyleSheet, Text, View ,Image,Platform} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React,{ useState } from 'react'

const Result = ({navigation,route}) => {
  const [score, setScore] = useState(route.params.score)
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Result</Text>
      <View style={{flex: 0.9}}>
     {score >=80 ? 
     <Image style={{width:'105%' ,height:'500%',alignSelf:'center'}} 
     source={require('../assests/Pass.png')}/> :
     <Image style={{width:'125%' ,height:'500%',alignSelf:'center'}} 
     source={require('../assests/Fail.png')}/>
     }
    </View>
      <View style={styles.scoreView}>
      <Text style={score >=80 ? {...styles.score,color:'green'} : {...styles.score,color:'red'}}>Your Score is {score}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Go To Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  container:{
    height:'100%'
  },
  header:{
    fontWeight:'600',
    fontSize:26,
    alignSelf:'center',
    marginVertical:Platform.OS === 'android'?'10%':'5%',
  },
  score:{
    fontSize:30,
    marginVertical:'30%',
    alignSelf:'center',
    fontWeight:'bold'    
  },
  buttonText:{
    alignSelf:'center',
    fontWeight:'600',
    fontSize:26,
    color:'white'
  },
  button:{
    width:'60%',
    padding:10,
    alignSelf:'center',
    backgroundColor:'#AE50F5',
    borderRadius:12,
    marginVertical:'20%',
    marginBottom:'10%',
},
scoreView:{
    marginTop:Platform.OS === 'android'?'60%':'50%',
    width:'60%',
    alignSelf:'center'

}
})