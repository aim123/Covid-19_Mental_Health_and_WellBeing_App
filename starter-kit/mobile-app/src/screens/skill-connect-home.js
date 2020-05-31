import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';



function SkillConnectHomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View ><Text style={styles.screenname}>Skill Connect</Text></View>
        <View style={styles.btn}>
            <Button
            title="To Teach skills"
            onPress={() => navigation.navigate('Teach')}
            />
        </View>
        <View style={styles.btn}> 
          <Button
          title="To Learn skills"
          onPress={() => navigation.navigate('Learn')}
        />
      </View>
    </View>
    );
  }

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
      backgroundColor: '#1062FE',
      color: '#FFFFFF',
      fontFamily: 'IBMPlexSans-Medium',
      fontSize: 16,
      overflow: 'hidden',
      padding: 12,
      textAlign:'center',
      marginTop: 15
    },
    screenname:{
      fontFamily: 'IBMPlexSans-Medium',
      fontSize: 30,
      marginBottom: 25

    }

});
export default SkillConnectHomeScreen;
