import  React,{ useState } from 'react' 
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'
import ResultImc from './ResultImc'

export default function Form(){

  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [messageImc, setMessageImc] = useState('preenhe a altura ai covarda')
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
        <View>
          
          <View style="styles.form">
          <Text>Altura</Text>
          <TextInput  
          onChangeText={setHeight} value={height} placeholder='Ex: 1.75'
          keyboardType='numeric'></TextInput>
          <Text>peso</Text>
          <TextInput onChangeText={setWeight} value={weight} placeholder='Ex: 75'
          keyboardType='numeric'></TextInput>
          <Button onPress={() =>Validacao()} title={textButton}/>

          <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
        </View>
    

  );
}


const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});