import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  scroll: {
    flex:1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    paddingTop: 15,
   // backgroundColor:'red'
  },
  image: {
    alignSelf: 'flex-start',
    height: 200,
    width:360,
    //tintColor:'red',
    resizeMode: 'contain',
    //backgroundColor:'blue'
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    color: '#323232',
    paddingBottom: 15,
  },
  buttonStyle:{flex:1, height:40,  backgroundColor:'#02075d', 
  alignItems:'center', justifyContent:'center', color:'white',
  margin:5
},
textStyle:{
  color:'white'
},
  subtitle: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 24,
    color: '#323232',
    //textDecorationColor: '#D0E2FF',
   // textDecorationLine: 'underline',
    paddingBottom: 5,
    paddingTop: 20
  },
  content: {
    fontFamily: 'IBMPlexSans-Light',
    color: '#323232',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'justify'
  },
  buttonGroup: {
    flex: 1,
    paddingTop: 15,
    width: 175
  },
  button: {
    backgroundColor: '#1062FE',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    marginTop: 15
  },
  textMargin:{
    marginTop:20
  }
});

const Home = () => {
  const navigation = useNavigation();

  return (
  <View style={styles.center}>
    <View style={styles.scroll}>
    <Image
       style={styles.image}
       source={require('../images/logo_2.jpg')}
       />
      <View style={styles.textMargin}>
      {/* <Text style={styles.title}>You & Me</Text> */}
      {/* <Text	style={styles.subtitle}>JUST TAP IT </Text> */}
      <Text style={styles.content}>
        This is a One-Stop App to Share and Care,Connect with a doctor,
        teach your skills to others or learn a new skill.{'\n'}
        At this time of lockdown,when the best
        way to keep the virus at bay is through Social distancing,What better then getting\n
        a doctor or books or skills at the press of a button.{'\n'}{'\n'}
        Our vision is to bring positivity in every ones life and fight this
        battle against Cornoa Virus together
      </Text>
      {/* <Text style={styles.content}>
      Our vision is to bring positivity in every ones life and fight this
      battle against Cornoa Virus together
      </Text> */}
      </View>
     
    </View>
    <View style={{flex:0.2, flexDirection:'row'}}>
<TouchableOpacity style={styles.buttonStyle} 
          onPress={() => navigation.navigate('Share & Collect')}>
  <Text style={styles.textStyle}>Share & Care</Text>
  </TouchableOpacity>


  <TouchableOpacity style={styles.buttonStyle}>
  <Text style={styles.textStyle}>Doctor Connect</Text>
  </TouchableOpacity>
  
  <TouchableOpacity style={styles.buttonStyle}>
  <Text style={styles.textStyle}>Skill Connect</Text>
  </TouchableOpacity>
    </View>
  </View>
)};

export default Home;
