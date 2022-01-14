import { React } from 'react' 
import {View, Text, Image } from 'react-native'

import Style from './style'
export default function Title(){
  return (
        <View style={Style.boxTitle}>
          <Image style={Style.imageBacate} source={require('../../image/abacate-feliz.png')} />
          <Text style={Style.textTitle}>Abacate IMC</Text>
          
        </View>
    

  );
}