import { React } from 'react' 
import {View,Text } from 'react-native'
import style from './style';

export default function ResultImc(props){
  return (
        <View style={style.resultImc}>
            
            <Text style={style.information}>{props.messageResultImc}</Text>
            <Text style={style.result}>{props.resultImc}</Text>
        </View>
    

  );
}