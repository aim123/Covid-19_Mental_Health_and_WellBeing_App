import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, Dimensions, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const {height, width}= Dimensions.get('window')


const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width,
    //backgroundColor: 'yellow'
  },
  buttonStyle:{flex:1, height:40, backgroundColor:'#02075d', 
  alignItems:'center', justifyContent:'center', color:'white',
  margin:5
},
textContainer:{
    flex:1,
   // backgroundColor:'blue',
    width,
    alignItems:'center',
    justifyContent:'center'
},
buttonContainer:{
flex:4,
width,
//backgroundColor:'red',
alignItems:'flex-start',
justifyContent:'center',
flexDirection:'row'
},
textStyle:{
    color:'white'
}

});

const shareCollect = () => {
  const navigation = useNavigation();

  return (
  <View style={styles.center}>
   <View style={styles.textContainer}>
       <Text style={{alignSelf:'center'}}>Welcome to One stop place to share books/toys/ games inside apartment complex	
	
	</Text>

   </View>
   <View style={styles.buttonContainer}>
       <TouchableOpacity style={styles.buttonStyle}
        onPress={() => navigation.navigate('Share Form')}>
           <Text style={styles.textStyle}>Share</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.buttonStyle}
onPress={() => navigation.navigate('Collect Form')}>
    <Text style={styles.textStyle} >Collect</Text>
       </TouchableOpacity>
   </View>
  </View>
)};

export default shareCollect;
