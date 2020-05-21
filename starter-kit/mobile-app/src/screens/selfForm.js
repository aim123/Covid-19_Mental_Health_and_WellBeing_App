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
// import RNPickerSelect from 'react-native-picker-select';
import {Dropdown} from 'react-native-material-dropdown';

const {height, width} = Dimensions.get('window');

const gender = [
  {
    value: '',
  },
  {
    value: 'Male',
  },
  {
    value: 'Female',
  },
  {
    value: 'Others',
  },
];

const occupation = [
  {
    value: '',
  },
  {
    value: 'Self Employed',
  },
  {
    value: 'IT professional',
  },
  {
    value: 'Others',
  },
];

const condition = [
  {
    value: '',
  },
  {
    value: 'Yes',
  },
  {
    value: 'No',
  },
];

const maritalStatus = [
  {
    value: '',
  },
  {
    value: 'Married',
  },
  {
    value: 'Unmarried',
  },
  {
    value: 'Widow',
  },
  {
    value: 'Divorced',
  },
];

const category = [
  {
    value: '',
  },
  {
    value: 'Acute disease',
  },
  {
    value: 'Chronic condition',
  },
  {
    value: 'Genetic disease',
  },
  {
    value: 'Others',
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
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleContainer: {
    flex: 5,
    width,
    //margin:8,
    //marginRight:7,
    //backgroundColor: 'purple',
    //elevation: 3,
  },
  middleSubContainer: {
    flex: 1,
    //margin:20,
    //borderWidth:2,
    borderColor: 'red',
    flexDirection: 'row',
  },
  middleVerticalContainer: {
    flex: 1,
    //backgroundColor: 'orange',
    margin: 0,
    paddingLeft: 5,
    //flexDirection:'column'
  },
  middleHorzontalContainer: {},
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //backgroundColor:'purple',
    padding: 3,
    flex: 0.3,
  },
  textInputContainer: {
    height: 40,
    width: 140,
    borderWidth: 1,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 17,
  },
  bottomContainer: {
    flex: 1,
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

const selfForm = () => {
  const navigation = useNavigation();
  const [selectedButton, setSelectedButton] = useState(5);
  //0- toys   1- books

  return (
    <View style={styles.center}>
      <View style={styles.topTextContainer}>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 10,
            textAlign: 'center',
            justifyContent: 'center',
          }}>{`Please provide the below details. Please be assured that your details are completely confidential with us and will be shared only with your consent to your selected Physiotherapist`}</Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.middleSubContainer}>
          <View style={styles.middleVerticalContainer}>
            <View style={styles.lineContainer}>
              <Text style={{fontWeight: 'bold', alignItems: 'center'}}>
                Name
              </Text>

              <TextInput placeholder="" style={styles.textInputContainer} />
            </View>

            <View style={styles.lineContainer}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    //backgroundColor: 'yellow',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Gender</Text>
                  <View
                    style={{
                      marginTop: -15,
                      marginLeft: 20,
                      flex: 1,
                      justifyContent: 'center',
                    }}>
                    <Dropdown
                      style={{flex: 1, marginLef: 5, justifyContent: 'center'}}
                      // label='Choose gender'
                      data={gender}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.lineContainer}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    //backgroundColor: 'yellow',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Occupation</Text>
                  <View
                    style={{
                      marginTop: -15,
                      marginLeft: 20,
                      flex: 1,
                      justifyContent: 'center',
                    }}>
                    <Dropdown
                      style={{flex: 1, justifyContent: 'center'}}
                      // label='Choose gender'
                      data={occupation}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.middleVerticalContainer}>
            <View style={styles.lineContainer}>
              <Text style={{fontWeight: 'bold'}}>Age</Text>
              <TextInput
                placeholder=""
                style={[styles.textInputContainer, {width: 50}]}
              />
            </View>

            <View style={styles.lineContainer}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    //backgroundColor: 'yellow',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold'}}>Marital {'\n'}Status</Text>
                  <View
                    style={{
                      marginTop: -15,
                      marginLeft: 20,
                      flex: 1,
                      justifyContent: 'center',
                    }}>
                    <Dropdown
                      style={{flex: 1, justifyContent: 'center'}}
                      // label='Choose gender'
                      data={maritalStatus}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.lineContainer}>
              <Text style={{fontWeight: 'bold'}}># Of Children</Text>

              <TextInput
                placeholder=""
                style={[styles.textInputContainer, {width: 50}]}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                //backgroundColor: 'yellow',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={styles.dropdownTextContainer}>
                <Text style={{fontWeight: 'bold'}}>On any medication</Text>
              </View>
              <View
                style={{
                  marginTop: -15,
                  width: 60,
                  flex: 0.5,
                  justifyContent: 'center',
                  marginLeft: 20,
                }}>
                <Dropdown
                  style={{
                    flex: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 0,
                  }}
                  // label='Choose gender'
                  data={condition}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottomUpContainer}>
          <TextInput
            placeholder="In case of Yes,Pls specify details"
            style={{width: width, borderWidth: 1, borderColor: 'black'}}
          />
        </View>
        <View
          style={{
            flex: 0.4,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
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
                <Text style={{fontWeight: 'bold'}}>
                  Any past medical History
                </Text>
              </View>
              <View
                style={{
                  marginTop: -15,
                  marginLeft: 20,
                  flex: 0.5,
                  justifyContent: 'center',
                  //backgroundColor: 'red',
                }}>
                <Dropdown
                  style={{
                    flex: 0.5,
                    justifyContent: 'center',
                    //backgroundColor: 'green',
                  }}
                  // label='Choose gender'
                  data={condition}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
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
                <Text style={{fontWeight: 'bold'}}>Category</Text>
              </View>
              <View
                style={{
                  marginTop: -15,
                  marginLeft: 20,
                  flex: 0.5,
                  justifyContent: 'center',
                }}>
                <Dropdown
                  style={{flex: 0.5, justifyContent: 'center'}}
                  // label='Choose gender'
                  data={category}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        {/* <TextInput placeholder='Give some details about it' style={{width}}/> */}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Self Submit Form')}>
          <Text style={styles.textStyle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default selfForm;
