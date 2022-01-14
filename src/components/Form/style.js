import { StyleSheet } from  'react-native'
const style = StyleSheet.create({
 formContent:{
   width: '90%',
   height: '100%',
   bottom: 0,
   backgroundColor: "#fff",
   alignItems: 'center',
   marginTop: 30,
   borderRadius: 30,
   borderStyle: 'solid',
   borderColor: '#66ff66',
   borderWidth: 1
   

 },
 form: {
    width: '90%',
    height: 'auto', 
    marginTop: 30,
    padding: 10,
    
    
 },
  formLabel: {
    color: '#000',
    fontSize: 20,
    paddingLeft: 20,



  },
   input: {
     width: '90%',
     borderRadius: 50,
    height: 50,
    paddingLeft: 10,
    margin: 12,
    marginTop: 20, 
    backgroundColor: '#e6ffe6',
    borderStyle: 'solid',
    borderColor: '#66ff66',
    borderWidth: 1
   },
    
   textButtonCalc: {
     fontSize: 25,
     color: '#fff',
     
   },
   buttonCalc: {
    backgroundColor: '#66ff66',
     paddingTop: 15,
     paddingBottom: 14,
     borderRadius: 30,
     justifyContent: 'center',
     alignItems: 'center',
     width: '90%', 
     marginLeft: 12,
     marginTop: 30
   }
})

export default style