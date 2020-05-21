import React,{useState} from 'react';
import { StyleSheet, View, Image, Text, TextInput,Picker,TouchableOpacity, Button, Dimensions, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { set } from 'react-native-reanimated';
import { Dropdown } from 'react-native-material-dropdown';
const {height, width}= Dimensions.get('window')

const gender = [{
    value: '',}
    ,{
    value: 'Male',
  }, {
    value: 'Female',
  }, {
    value: 'Others',
  }];

const occupation = [{
  value: '',}
  ,{
  value: 'Self Employed',
}, {
  value: 'IT professional',
}, {
  value: 'Others',
}];

const condition = [{
  value: '',}
  ,{
  value: 'Yes',
}, {
  value: 'No',
}];

const maritalStatus = [{
  value: '',}
  ,{
  value: 'Married',
}, {
  value: 'Unmarried',
},{
  value: 'Widow',
},{
  value: 'Divorced',
}];

const category = [{
  value: '',}
  ,{
  value: 'Acute disease',
}, {
  value: 'Chronic condition',
},{
  value: 'Genetic disease',
},{
  value: 'Others',
}];

const relation = [{
    value: '',}
    ,{
    value: 'Mother',
  }, {
    value: 'Father',
  },{
    value: 'Spouse',
  },{
    value: 'Son',
  },{
    value: 'daughter',
  },{
    value: 'Mother-in-Law',
  },{
    value: 'Fatherr-in-Law',
  },{
    value: 'Others',
  }]

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
backgroundColor:'purple',
elevation:3
},
middleSubContainer:{
    flex:1,
    //margin:20,
//borderWidth:2,
 borderColor:'#000',
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
backgroundColor:'green',
alignItems:'center',
justifyContent:'center',
},
bottomUpContainer:{
    flex:0.3,
width,
backgroundColor:'green',
alignItems:'center',
justifyContent:'center',
}
});

const relativeForm = () => {
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
       <Text style={{fontSize:17}}>{`Please provide the below details. Please be assured that your details are completely confidential
       with us and will be shared only with your consent to your selected Physiotherapist`}</Text>
   </View>
   <View style={styles.middleContainer}>
<View style={styles.middleSubContainer}>
    <View style={styles.middleVerticalContainer}>
        <View style={styles.lineContainer}>
        <Text style={{fontWeight:'bold'}}>Name</Text>
        {/* <Picker
        selectedValue={'Tamilnadu'}
        style={{ height: 50, width: 100 }}
       // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
             <Picker.Item label="" value="js" />
           <Picker.Item label="Tamilnadu" value="js" />
        <Picker.Item label="Karnataka" value="java" />
      </Picker> */}
       <TextInput placeholder='' style={{height: 40, width: 100, borderWidth: 1,  marginBottom: 20,justifyContent:'center' }}/>
      </View>
      <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, flexDirection:"row",backgroundColor
            :"yellow",
            alignItems:'center', }}>
              <Text style={{fontWeight:'bold'}}>Gender</Text>
     <View style={{marginTop:-15, flex:1,justifyContent:'center'}}>
      <Dropdown
        style={{flex:1,justifyContent:'center'}}
        // label='Choose gender'
        data={gender}
      />
      </View>
      </View>
      </View>


        <View style={styles.lineContainer}>
        <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, flexDirection:"row",backgroundColor
            :"yellow",
            alignItems:'center', }}>
              <Text style={{fontWeight:'bold'}}>Occupation</Text>
     <View style={{marginTop:-15, flex:1,justifyContent:'center'}}>
      <Dropdown
        style={{flex:1,justifyContent:'center'}}
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
    <Text style={{fontWeight:'bold'}}>Age</Text>
        {/* <Picker
        selectedValue={'Tamilnadu'}
        style={{ height: 50, width: 100 }}
       // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
             <Picker.Item label="" value="js" />
           <Picker.Item label="Chennai" value="js" />
        <Picker.Item label="Banglore" value="java" />
        </Picker> */}
        <TextInput placeholder='' style={{height: 40, width: 100, borderWidth: 1,  marginBottom: 20,justifyContent:'center' }}/>
        </View>
        <View style={styles.lineContainer}>
        <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, flexDirection:"row",backgroundColor
            :"yellow",
            alignItems:'center', }}>
              <Text style={{fontWeight:'bold'}}>Marital {'\n'}Status</Text>
     <View style={{marginTop:-15, flex:1,justifyContent:'center'}}>
      <Dropdown
        style={{flex:1,justifyContent:'center'}}
        // label='Choose gender'
        data={maritalStatus}
      />
      </View>
      </View>
      </View>
        </View>

        <View style={styles.lineContainer}>
        <Text style={{fontWeight:'bold'}}># Of Children</Text>
        {/* <Picker
        selectedValue={'Tamilnadu'}
        style={{ height: 50, width: 100 }}
       // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
           <Picker.Item label="" value="js" />
           <Picker.Item label="The Metro zone" value="js" />
        <Picker.Item label="Casa Grande" value="java" />
        </Picker> */}
            <TextInput placeholder='' style={{height: 40, width: 100, borderWidth: 1,  marginBottom: 20,justifyContent:'center' }}/>
        </View>



    </View>

</View>
<View style={{flex:0.2, flexDirection:'row',
alignItems:'flex-start', justifyContent:'center'}}>
    {/* <TouchableOpacity style={styles.buttonStyle} onPress={()=> setSelectedButton(0) }>
        <Text style={styles.textStyle}>Toys/Games</Text>
    </TouchableOpacity> */}
{/* 
    <TouchableOpacity style={styles.buttonStyle}  onPress={()=> setSelectedButton(1) }>
        <Text style={styles.textStyle}>Books</Text>
    </TouchableOpacity> */}
        <Text style={{fontWeight:'bold'}}>On any medication</Text>
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

<View style={styles.bottomUpContainer}>

       <TextInput placeholder='In case of Yes,Pls specify details' style={{width}}/>  
</View>
<View style={{flex:0.4, flexDirection:'row',
alignItems:'flex-start', justifyContent:'center'}}>
        {/* <Text style={{fontWeight:'bold'}}>Any past medical History</Text>
        <Picker
        selectedValue={'Tamilnadu'}
        style={{ height: 50, width: 100 }}
       // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="" value="js" />
        <Picker.Item label="The Metro zone" value="js" />
        <Picker.Item label="Casa Grande" value="java" />
        </Picker>  */}
        <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, flexDirection:"row",backgroundColor
            :"yellow",
            alignItems:'center', }}>
              <Text style={{fontWeight:'bold'}}>Any past medical History</Text>
     <View style={{marginTop:-15, flex:1,justifyContent:'center'}}>
      <Dropdown
        style={{flex:1,justifyContent:'center'}}
        // label='Choose gender'
        data={condition}
      />
      </View>
      </View>
      </View>
</View>
<View style={{flex:0.2, flexDirection:'column',
alignItems:'flex-start', justifyContent:'center'}}>
        {/* <Text style={{fontWeight:'bold'}}>Category</Text>
        <Picker
        selectedValue={'Tamilnadu'}
        style={{ height: 50, width: 100 }}
       // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="" value="js" />
        <Picker.Item label="The Metro zone" value="js" />
        <Picker.Item label="Casa Grande" value="java" />
        </Picker>  */}
         <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, flexDirection:"row",backgroundColor
            :"yellow",
            alignItems:'center', }}>
              <Text style={{fontWeight:'bold'}}>Category</Text>
     <View style={{marginTop:-15, flex:1,justifyContent:'center'}}>
      <Dropdown
        style={{flex:1,justifyContent:'center'}}
        // label='Choose gender'
        data={category}
      />
      </View>
      </View>
      </View>
</View>

<View style={{flex:0.2, flexDirection:'row',
alignItems:'flex-start', justifyContent:'center'}}>
        {/* <Text style={{fontWeight:'bold'}}>Relation</Text>
        <Picker
        selectedValue={'Tamilnadu'}
        style={{ height: 50, width: 100 }}
       // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="" value="js" />
        <Picker.Item label="The Metro zone" value="js" />
        <Picker.Item label="Casa Grande" value="java" />
        </Picker>  */}
        <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, flexDirection:"row",backgroundColor
            :"yellow",
            alignItems:'center', }}>
              <Text style={{fontWeight:'bold'}}>Relation</Text>
     <View style={{marginTop:-15, flex:1,justifyContent:'center'}}>
      <Dropdown
        style={{flex:1,justifyContent:'center'}}
        data={relation}
      />
      </View>
      </View>
      </View>
</View>

<View style={{flex:1,
alignItems:'center', justifyContent:'center'}}>
    {renderButtons()}
</View>

   </View>
   <View style={styles.bottomContainer}>
       {/* <TextInput placeholder='Give some details about it' style={{width}}/> */}
       <TouchableOpacity style={styles.buttonStyle}
         onPress={() => navigation.navigate('Relative Submit Form')}>
        <Text style={styles.textStyle}>Submit</Text>
    </TouchableOpacity>
   </View>
  </View>
)};

export default relativeForm;
