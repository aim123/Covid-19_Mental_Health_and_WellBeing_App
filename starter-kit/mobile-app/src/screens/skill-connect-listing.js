import React from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PickerSelect from 'react-native-picker-select';

const SkillsListScreen = props =>{
    return(
    <ScrollView style={styles.outerView}>
       <View ><Text style={styles.screenname}>Skill Connect: Listing </Text></View>
        <View >
            <View style={styles.textInput}>
                <Text style={styles.label}>Available Tutors</Text>
                    <PickerSelect
                        style={{ inputIOS: styles.selector }}
                        items={[
                            { label: 'Music-Ajay', value: 'Music-Ajay' },
                            { label: 'Instrument-Vinod', value: 'Music-Vinod' },
                            { label: 'Other', value: 'Other' }
                        ]}
                    />
            </View>
            <View style={styles.textInput}>
                <Text style={styles.label}>Available Time Slot</Text>
                    <PickerSelect
                        style={{ inputIOS: styles.selector }}
                        items={[
                            { label: 'Morning', value: '7 AM to 8 AM' },
                            { label: 'Evening', value: '7 PM to 8 PM' },
                           
                        ]}
                    />
            </View>
            <TouchableOpacity>
                <Text style={styles.button}>Submit</Text>
            </TouchableOpacity>
           
      </View>
    </ScrollView>
    );

};

const styles = StyleSheet.create({
    outerView: {
      flex: 1,
      padding: 22,
      backgroundColor: '#FFF'
    },
    splitView: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    typeArea: {
      width: '40%'
    },
    label: {
      fontFamily: 'IBMPlexSans-Medium',
      color: '#000',
      fontSize: 14,
      paddingBottom: 5
    },
    selector: {
      fontFamily: 'IBMPlexSans-Medium',
      borderColor: '#D0E2FF',
      borderWidth: 2,
      padding: 16,
      marginBottom: 25
    },
    quantityArea: {
      width: '40%'
    },
    screenname:{
      fontFamily: 'IBMPlexSans-Medium',
      fontSize: 30,
      marginBottom: 25

    },

    textInput: {
      fontFamily: 'IBMPlexSans-Medium',
      flex: 1,
      borderColor: '#D0E2FF',
      borderWidth: 2,
      padding: 14,
      elevation: 2,
      marginBottom: 25
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 10
    },
    checkboxLabel: {
      fontFamily: 'IBMPlexSans-Light',
      fontSize: 13
    },
    textInputDisabled: {
      fontFamily: 'IBMPlexSans-Medium',
      backgroundColor: '#f4f4f4',
      color: '#999',
      flex: 1,
      padding: 16,
      elevation: 2,
      marginBottom: 25
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
    }
  });
export default SkillsListScreen;
 