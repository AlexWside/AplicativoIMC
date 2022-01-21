import  React,{ useState } from 'react' 
import {View, Text, TextInput,  TouchableOpacity} from 'react-native'
import ResultImc from './ResultImc'
import style from './style'
export default function Form(){

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState('preenche os dados ai covarde')
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('calcular')


  function CalculaImc(){
    return setImc((weight/(height*height)).toFixed(2))
  }

  function Validacao(){
     if(weight != null && height != null){
      CalculaImc()
      setMessageImc('o imc é : ')
      setHeight(null)
      setWeight(null)
      setTextButton('Calcular Novamente')
      return
     }

     setImc(null)
     setTextButton('calcular')
     setMessageImc("preencha os dados")
  }
  return (
        <View style={style.formContent}>
          
          <View style={style.form}>
          <Text style={style.formLabel}>Altura</Text>
          <TextInput  
          style={style.input}
          onChangeText={setHeight} value={height} placeholder='Ex: 1.75'
          keyboardType='numeric'></TextInput>
          <Text style={style.formLabel}>Peso</Text>
          <TextInput
            style={style.input}
          onChangeText={setWeight} value={weight} placeholder='Ex: 75'
          keyboardType='numeric'></TextInput>
          
          <TouchableOpacity 
          style={style.buttonCalc}  
          onPress={
            () =>Validacao()
            } 
            title={textButton}>
            <Text style={style.textButtonCalc}>{textButton}</Text>
          </TouchableOpacity>
          
        </View>
        <ResultImc  messageResultImc={messageImc} resultImc={imc} />
        </View>
    

  );
}


