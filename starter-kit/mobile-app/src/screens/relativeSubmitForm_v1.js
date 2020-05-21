import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Picker,
  TouchableOpacity,
  Button,
  Dimensions,
  Linking,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {set} from 'react-native-reanimated';
import {Dropdown} from 'react-native-material-dropdown';
const {height, width} = Dimensions.get('window');

const psychotherapists = [
  {
    value: '',
  },
  {
    value: 'Dr.Arun Kumar',
  },
  {
    value: 'Dr.Devi Priya',
  },
  {
    value: 'Dr.Divyadharshini',
  },
  {
    value: 'Dr.Prem Sekar',
  },
];

const datetime = [
  {
    value: '',
  },
  {
    value: '01-05-2020, 08 - 11 AM',
  },
  {
    value: '02-05-2020, 08 - 11 AM',
  },
  {
    value: '03-05-2020, 08 - 11 AM',
  },
  {
    value: '04-05-2020, 08 - 11 AM',
  },
];

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width,
    //backgroundColor: 'yellow'
  },
  buttonStyle: {
    width: 100,
    height: 40,
    backgroundColor: '#02075d',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    margin: 5, //
  },
  textStyle: {
    color: 'white',
  },

  topTextContainer: {
    flex: 1,
    width,
    ////backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleContainer: {
    flex: 5,
    width,
    //margin:8,
    //marginRight:7,
    //backgroundColor: 'purple',
    elevation: 3,
  },
  middleSubContainer: {
    flex: 1,
    //margin:20,
    //borderWidth:2,
    borderColor: '#000',
    flexDirection: 'row',
  },
  middleVerticalContainer: {
    flex: 1,
    // backgroundColor:'orange',
    margin: 0,
    paddingLeft: 5,
    //flexDirection:'row'
  },
  middleHorzontalContainer: {},
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 0.4,
    width,
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomUpContainer: {
    flex: 0.3,
    width,
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownTextContainer: {
    flex: 0.5,
    //backgroundColor: 'blue',
    alignItems: 'flex-end',
  },
});

const selfSubmitForm = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 1.5,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* <Text style={{fontWeight:'bold'}}>Pyscotherapists</Text> */}
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              //backgroundColor: 'yellow',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.dropdownTextContainer}>
              <Text style={{fontSize: 16, textAlign: 'center'}}>
                These are the psychotherapists listed for you.Please select your
                desired psychotherapists to proceed.
              </Text>
            </View>
            <View
              style={{
                marginTop: -15,
                marginLeft: 15,
                flex: 0.5,
                justifyContent: 'center',
              }}>
              <Dropdown
                style={{flex: 1, justifyContent: 'center'}}
                // label='Choose gender'
                data={psychotherapists}
              />
            </View>
          </View>
        </View>
      </View>

      {/* <Text style={{fontWeight:'bold'}}>Pyscotherapists</Text>
        <Picker
        selectedValue={'Tamilnadu'}
        style={{ height: 50, width: 100 }}>
           <Picker.Item label="" value="js" />
           <Picker.Item label="Anna Nagar" value="js" />
        <Picker.Item label="RK Nagar" value="java" />
       
        </Picker> */}
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* <Text style={{fontWeight:'bold'}}>Pyscotherapists</Text> */}
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              //backgroundColor: 'yellow',
              alignItems: 'center',
            }}>
            <View style={styles.dropdownTextContainer}>
              <Text
                style={{
                  fontSize: 16,
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                Please proceed for booking as per the Available Date & Time
              </Text>
            </View>
            <View
              style={{
                marginTop: -15,
                marginLeft: 15,
                flex: 0.5,
                justifyContent: 'center',
              }}>
              <Dropdown
                style={{flex: 1, justifyContent: 'center'}}
                // label='Choose gender'
                data={datetime}
              />
            </View>
          </View>
        </View>
      </View>

      {/* <Text style={{fontWeight:'bold'}}>Available date and time</Text>
        <Picker
        selectedValue={'Tamilnadu'}
        style={{ height: 50, width: 100 }}>
           <Picker.Item label="" value="js" />
           <Picker.Item label="Anna Nagar" value="js" />
        <Picker.Item label="RK Nagar" value="java" />
       
        </Picker> */}

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Self Final Submit')}>
          <Text style={styles.textStyle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default selfSubmitForm;
