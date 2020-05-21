import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
  Dimensions,
  Linking,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');

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
    flex: 1,
    height: 40,
    backgroundColor: '#02075d',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    margin: 5,
  },
  textContainer: {
    flex: 5,
    //backgroundColor:'blue',
    width,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    flex: 4,
    width,
    //backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    justifyContent: 'center',
  },
});

const doctorConnect = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <View style={styles.textContainer}>
        <Text style={{fontSize: 18, alignSelf: 'center', textAlign: 'center'}}>
          Mental health is very important along with physical health. Its very
          vital to have peace,harmony and happiness at home during these crisis
          times.{' '}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Self Form')}>
          <Text style={styles.textStyle}>Self</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Relative Form')}>
          <Text style={styles.textStyle}>LovedOnes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default doctorConnect;
