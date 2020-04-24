import React,{useState} from 'react';
import { StyleSheet, View, Image, Text, TextInput,Picker,TouchableOpacity, Button, Dimensions, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { set } from 'react-native-reanimated';
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
  buttonStyle:
  {width:100,
     height:40, 
     backgroundColor:'#02075d', 
  alignItems:'center', justifyContent:'center', color:'white',
  margin:5//
},
textStyle:{
    color:'white'
},

topTextContainer:{
flex:1,
width,
////backgroundColor:'red',
alignItems:'center',
justifyContent:'center',
},
middleContainer:{
    flex:5,
width,
//margin:8,
//marginRight:7,
//backgroundColor:'purple',
elevation:3
},
middleSubContainer:{
    flex:1,
    //margin:20,
//borderWidth:2,
 //borderColor:'#000',
   flexDirection:'row'
},
middleVerticalContainer:{
    flex:1,
  // backgroundColor:'orange',
    margin:0,
    paddingLeft:5
    //flexDirection:'row'
},
middleHorzontalContainer:{

},
lineContainer:{
    flexDirection:'row',
    alignItems:'center',
justifyContent:'center',
},
bottomContainer:{
    flex:1,
width,
//backgroundColor:'green',
alignItems:'center',
justifyContent:'center',
}
 
});

const shareForm = () => {
 const navigation = useNavigation();
 const [selectedButton, setSelectedButton]=useState(5)
 //0- toys   1- books

 function renderButtons(){
     if(selectedButton===0){
         return(
             <>
            <View style={styles.lineContainer}>
            <Text style={{fontWeight:'bold'}}>Age Group</Text>
                <Picker
                selectedValue={'Tamilnadu'}
                style={{ height: 50, width: 100 }}
               // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                   <Picker.Item label="" value="js" />
                   <Picker.Item label="1-3" value="js" />
                <Picker.Item label="4-6" value="java" />
                </Picker>
                </View>
                <View style={styles.lineContainer}>
            <Text style={{fontWeight:'bold'}} >Categroy</Text>
                <Picker
                selectedValue={'Tamilnadu'}
                style={{ height: 50, width: 100 }}
               // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                  <Picker.Item label="" value="js" />
                   <Picker.Item label="Dolls" value="js" />
                <Picker.Item label="Animals" value="java" />
                <Picker.Item label="Educational" value="java" />
                </Picker>
                </View>
        </>
         )
     } else if(selectedButton==1){
         return(
             <>
            <View style={styles.lineContainer}>
            <Text style={{fontWeight:'bold'}}>Genre</Text>
                <Picker
                selectedValue={'Tamilnadu'}
                style={{ height: 50, width: 100 }}
               // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                   <Picker.Item label="" value="js" />
                   <Picker.Item label="Fictionn" value="js" />
                <Picker.Item label="Non-Fiction" value="java" />
                </Picker>
                </View>
                <View style={styles.lineContainer}>
            <Text style={{fontWeight:'bold'}}>Book</Text>
                <Picker
                selectedValue={'Tamilnadu'}
                style={{ height: 50, width: 100 }}
               // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                  <Picker.Item label="" value="js" />
                   <Picker.Item label="Harry Potter" value="js" />
                <Picker.Item label="The Kite Runner" value="java" />
                <Picker.Item label="Silent Spring" value="java" />
                </Picker>
                </View>
        </>
         )
     }
 }

  return (
  <View style={styles.center}>
   <View style={styles.topTextContainer}>
       <Text style={{fontSize:17}}>{`Thanks for your time and \neffort for sharing & caring`}</Text>
   </View>
   <View style={styles.middleContainer}>
<View style={styles.middleSubContainer}>
    <View style={styles.middleVerticalContainer}>
        <View style={styles.lineContainer}>
        <Text style={{fontWeight:'bold'}}>State</Text>
        <Picker
        selectedValue={'Tamilnadu'}
        style={{ height: 50, width: 100 }}
       // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
             <Picker.Item label="" value="js" />
           <Picker.Item label="Tamilnadu" value="js" />
        <Picker.Item label="Karnataka" value="java" />
       
      </Picker>
      </View>
      <View style={styles.lineContainer}>
        <Text style={{fontWeight:'bold'}}>Locality</Text>
        <Picker
        selectedValue={'Tamilnadu'}
        style={{ height: 50, width: 100 }}
       // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    >
            <Picker.Item label="" value="js" />
           <Picker.Item label="Anna Nagar" value="js" />
        <Picker.Item label="RK Nagar" value="java" />
       
      </Picker>
</View>
    </View>
    <View style={styles.middleVerticalContainer}>
    <View style={styles.lineContainer}>
    <Text style={{fontWeight:'bold'}}>City</Text>
        <Picker
        selectedValue={'Tamilnadu'}
        style={{ height: 50, width: 100 }}
       // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
             <Picker.Item label="" value="js" />
           <Picker.Item label="Chennai" value="js" />
        <Picker.Item label="Banglore" value="java" />
        </Picker>
        </View>
        <View style={styles.lineContainer}>
    <Text style={{fontWeight:'bold'}}>Apt Name</Text>
        <Picker
        selectedValue={'Tamilnadu'}
        style={{ height: 50, width: 100 }}
       // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
           <Picker.Item label="" value="js" />
           <Picker.Item label="The Metro zone" value="js" />
        <Picker.Item label="Casa Grande" value="java" />
        </Picker>
        </View>
    </View>

</View>
<View style={{flex:0.5, flexDirection:'row',
alignItems:'flex-start', justifyContent:'center'}}>
    <TouchableOpacity style={styles.buttonStyle} onPress={()=> setSelectedButton(0) }>
        <Text style={styles.textStyle}>Toys/Games</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonStyle}  onPress={()=> setSelectedButton(1) }>
        <Text style={styles.textStyle}>Books</Text>
    </TouchableOpacity>
    
</View>
<View style={{flex:1,
alignItems:'center', justifyContent:'center'}}>
    {renderButtons()}
</View>

   </View>
   <View style={styles.bottomContainer}>
      
       <TouchableOpacity style={styles.buttonStyle}
         onPress={() => navigation.navigate('Collect Form Submition')}>
        <Text style={styles.textStyle}>Submit</Text>
    </TouchableOpacity>
   </View>
  </View>
)};

export default shareForm;
