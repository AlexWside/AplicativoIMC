import Title from './src/components/Title';
import { StyleSheet,  View } from 'react-native';
import Form from './src/components/Form'
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ffe6',
    paddingTop: 80,
    alignItems: 'center'
 
    
  }
});
