import React from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PickerSelect from 'react-native-picker-select';

const TeachSkillsScreen = props =>{
    return(
    <ScrollView style={styles.outerView}>
       <View ><Text style={styles.screenname}>Skill Connect: Teach </Text></View>
        <View >
            <View style={styles.textInput}>
                <Text style={styles.label}>Skill</Text>
                    <PickerSelect
                        style={{ inputIOS: styles.selector }}
                        items={[
                            { label: 'Music', value: 'Music' },
                            { label: 'Instrument', value: 'Instrument' },
                            { label: 'Other', value: 'Other' }
                        ]}
                    />
            </View>
            <View>
                <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.textInput}
                        returnKeyType='send'
                        enablesReturnKeyAutomatically={true}
                        placeholder=''
                        blurOnSubmit={false}
                    />
            </View>
            <View>
                <Text style={styles.label}>Age</Text>
                    <TextInput
                        style={styles.textInput}
                        returnKeyType='send'
                        enablesReturnKeyAutomatically={true}
                        placeholder=''
                        blurOnSubmit={false}
                    />
            </View>
            <View>
                <Text style={styles.label}>Gmail ID</Text>
                    <TextInput
                        style={styles.textInput}
                        returnKeyType='send'
                        enablesReturnKeyAutomatically={true}
                        placeholder=''
                        blurOnSubmit={false}
                    />
            </View>
            <View style={styles.textInput}>
                <Text style={styles.label}>Expert Level</Text>
                    <PickerSelect
                        style={{ inputIOS: styles.selector }}
                        items={[
                            { label: 'Beginner', value: 'Beginner' },
                            { label: 'Intermediate', value: 'Intermediate' },
                            { label: 'Expert', value: 'Expert' }
                        ]}
                    />
            </View>
            <View style={styles.textInput}>
                <Text style={styles.label}>Preferred time slot</Text>
                    <PickerSelect
                        style={{ inputIOS: styles.selector }}
                        items={[
                            { label: 'Morning', value: 'Morning' },
                            { label: 'After Noon', value: 'After Noon' },
                            { label: 'Other', value: 'Other' }
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
export default TeachSkillsScreen;
 