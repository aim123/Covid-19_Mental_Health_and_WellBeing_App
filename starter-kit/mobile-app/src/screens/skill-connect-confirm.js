import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


const SkillConnectConfirmScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>This is a confirmation message screen</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});
export default SkillConnectConfirmScreen;
 