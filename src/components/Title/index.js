import { React } from 'react' 
import {View, Text } from 'react-native'
import style from './style';
import Style from './style'
export default function Title(){
  return (
        <View style={Style.boxTitle}>
          <Text style={Style.textTitle}>Abacate IMC</Text>
          
        </View>
    

  );
}