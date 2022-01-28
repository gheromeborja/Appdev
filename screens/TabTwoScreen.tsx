import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { View } from '../components/Themed';





export default function App() {
  return (

    <View style={styles.container}>
   
        <Image source={require('../back.png')} style={styles.image}/>
         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image:{
    height: '100%' ,
    width: '100%'
  }

});