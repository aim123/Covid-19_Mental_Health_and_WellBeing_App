import React,{useState} from 'react';
import { StyleSheet, View, Image, Text, TextInput,Picker,TouchableOpacity, Button, Dimensions, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const {height, width}= Dimensions.get('window')


const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    //backgroundColor: 'yellow'
  },
  buttonStyle:
  {width:100,
     height:40, 
     backgroundColor:'blue', 
  alignItems:'center', justifyContent:'center', color:'white',
  margin:5
},
textContainer:{
    padding:20,
    alignItems:'center', justifyContent:'center',
}

 
});

const shareForm = () => {
  const navigation = useNavigation();


  return (
  <View style={styles.center}>
      <View style={styles.textContainer}>
   <Text  style={{textAlign:'center',fontSize:18}}>Thanks for Staying home.</Text>
   </View>
   <View style={styles.textContainer}>
   <Text style={{textAlign:'center', fontSize:18}}>Please collect from "Sharing&Caring" DropBox located at security gate.		
		
		
		</Text>
        </View>
  </View>
)};

export default shareForm;
