import 'react-native-gesture-handler';
import * as React from 'react';

import { Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoadingScreen from './src/screens/loading';
//import Home from './src/screens/home';
import Chat from './src/screens/chat';

import Home from './src/screens/ShareCare';

import SearchResources from './src/screens/resources-search';
import AddResource from './src/screens/resource-add';
import EditResource from './src/screens/resource-edit';
import MyResources from './src/screens/resources-my';
//import MyResources from './src/screens/ShareCare-resources-my';
import { StyleSheet, View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import ShareCare_home from '.src/screens/ShareCare-resources-my';
import Map from './src/screens/map';
import shareCollect from './src/screens/shareCollect'
import shareForm from './src/screens/shareForm'
import shareFormSubmit from './src/screens/shareFormSubmit'
import collectForm from './src/screens/collectForm'
import collectFormSubmit from './src/screens/collectFormSubmit'

import { HomeIcon, DonateIcon, SearchIcon } from './src/images/svg-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  scroll: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    paddingTop: 75
  },
  image: {
    alignSelf: 'flex-start',
    height: '20%',
    width:'50%',
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    color: '#323232',
    paddingBottom: 15
  },
  subtitle: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 24,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    textDecorationLine: 'underline',
    paddingBottom: 5,
    paddingTop: 20
  },
  content: {
    fontFamily: 'IBMPlexSans-Light',
    color: '#323232',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
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
  }
});

const ResourcesStackOptions = ({ navigation }) => {
  return ({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('Chat')}
        title='Chat '
      />
    )
  });
};

const DonationsStackOptions = ({ navigation }) => {
  return ({
    headerRight: () => (
      <Button
        onPress={() => navigation.navigate('Add Donation')}
        title='Add '
      />
    )
  });
};

const tabBarOptions = {
  // showLabel: false,
  activeTintColor: '#1062FE',
  inactiveTintColor: '#000',
  style: {
    backgroundColor: '#F1F0EE',
    paddingTop: 5
  }
};

const TabLayout = () => (
  <Tab.Navigator
    style={{paddingTop: 50}}
    initialRouteName='Home'
    tabBarOptions={tabBarOptions} >
    <Tab.Screen
      name='Home'
      component={HomeStack}
      options={{
        tabBarIcon: ({color}) => (<HomeIcon fill={color}/>)
      }}
    />
  {/*  <Tab.Screen
      name='ShareCare'
      component={DonateStackLayout}
      options={{
        tabBarIcon: ({color}) => (<DonateIcon fill={color} />)
      }}
    />
    */}

    <Tab.Screen
      name='Search'
      component={SearchStackLayout}
      options={{
        tabBarIcon: ({color}) => (<SearchIcon fill={color} />)
      }}
    />
  </Tab.Navigator>
);

const HomeStack = () => (

  
  <Stack.Navigator>
  
	<Stack.Screen name='Home' component={Home}  />
    <Stack.Screen name='Share & Collect' component={shareCollect} />
    <Stack.Screen name='Share Form' component={shareForm} />
    <Stack.Screen name='Share Form Submition' component={shareFormSubmit} />
    <Stack.Screen name='Collect Form' component={collectForm} />
    <Stack.Screen name='Collect Form Submition' component={collectFormSubmit} />
  </Stack.Navigator>
);

const DonateStackLayout = () => (

  
  <Stack.Navigator>
  
	<Stack.Screen name='My Donations' component={MyResources} options={DonationsStackOptions} />
    <Stack.Screen name='Add Donation' component={AddResource} />
    <Stack.Screen name='Edit Donation' component={EditResource} />

  </Stack.Navigator>
);

const SearchStackLayout = () => (
  <Stack.Navigator>
    <Stack.Screen name='Search Resources' component={SearchResources} options={ResourcesStackOptions} />
    <Stack.Screen name='Chat' component={Chat} />
    <Stack.Screen name='Map' component={Map} />
  </Stack.Navigator>
);

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (<LoadingScreen />);
  } else {
    return (
      <NavigationContainer>
        <TabLayout/>
      </NavigationContainer>
    );
  }
};

export default App;
