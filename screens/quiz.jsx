import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios'
import React,{ useEffect,useState } from 'react'
const Quiz = ({navigation}) => {
    const [resultData,setResultdata] = useState();
    const [quesNumber,setQuesNumber] = useState(0);
    const[options,setOptions] = useState([])
    const [score,setScore] = useState(0)
    // useEffect(() => { 
    //  getQuizQuestion()
    // }, []);
    const shuffleArray=(array)=> {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    useEffect(() => {
        axios.get(`https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986`).then((res) => {
            console.log("categories", res.data)
            setResultdata(res.data.results);
            setOptions(generateSuffleOptions(res.data.results[0]))
        })
    }, [])

    const generateSuffleOptions =(singleQuestion)=>{
        const options=[...singleQuestion.incorrect_answers]
        options.push(singleQuestion.correct_answer)
        shuffleArray(options)
        return options

    }
    // const getQuizQuestion = async()=>{
    //     const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     console.log("data.results",data.results[0])
    //     setResultdata(data.results);
    //     console.log("resultData[quesNumber]",resultData[quesNumber].question)
    // }
    const nextQuestion =()=>{
        if(quesNumber<resultData.length)
        {
            setQuesNumber(quesNumber+1);
            setOptions(generateSuffleOptions(resultData[quesNumber+1]))

        }
    }

    const sumbitCorrectAnswer=(option)=>{      
           if(option === resultData[quesNumber].correct_answer)
            {
            setScore(score+10)
            }
            if(quesNumber!==9)
            {
                setQuesNumber(quesNumber+1);
                setOptions(generateSuffleOptions(resultData[quesNumber+1]))
            }
    }

  return (
    <View style={styles.container}>
        {resultData && <>
        <View>
      <Text style={styles.ques}>Q{quesNumber+1}. {decodeURIComponent(resultData[quesNumber].question)}</Text>
      </View>
      <View style={{flex:1}}>
      <TouchableOpacity style={[styles.button,{backgroundColor:'#D192FF'}]} onPress={()=>sumbitCorrectAnswer(options[0])}>
            <Text>{decodeURIComponent(options[0])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#D192FF'}]} onPress={()=>sumbitCorrectAnswer(options[1])}>
            <Text>{decodeURIComponent(options[1])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#D192FF'}]} onPress={()=>sumbitCorrectAnswer(options[2])}>
            <Text>{decodeURIComponent(options[2])}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,{backgroundColor:'#D192FF'}]} onPress={()=>sumbitCorrectAnswer(options[3])}>
            <Text>{decodeURIComponent(options[3])}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
      
        {quesNumber < 9  && <TouchableOpacity style={styles.button} onPress={()=>nextQuestion()}>
            <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>}
       
       {quesNumber === 9 && <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Result",{
        score:score
       })}>
            <Text style={styles.buttonText}>SHOW RESULTS</Text>
        </TouchableOpacity>}
       
      </View>
     
        </>}
     
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    bottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:10,
    },
    button:{
        paddingHorizontal:22,
        padding:'4%',
        // alignItems:'center',
        backgroundColor:'#AE50F5',
        borderRadius:12,
        margin:'2%',
        marginBottom:20,
    },

    container:{
        height:'100%'
    },
    buttonText:{
        color:'white',
    },
    ques:{
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:'20%'
        
    }
    

})