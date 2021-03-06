// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// //import { enableScreens } from 'react-native-screens';
// import 'react-native-gesture-handler';
// import Signin from './signin'
// import Welcome from './welcome';
// import Login from './login'

// const Stack = createStackNavigator();
// enableScreens();

// Stack.Navigator.defaultProps = {
//   headerMode: 'none',
// };

// function MyStack(navigation) {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="welcome">
//         <Stack.Screen name="welcome" component={Welcome} />
//         <Stack.Screen name="signin" component={Signin} />
//         <Stack.Screen name="createAccount" component={CreateAccount} />
//         <Stack.Screen name="login" component={Login} />
//         <Stack.Screen name="forgetPassword" component={ForgetPassword} />
//         <Stack.Screen name="Delivering" component={Delivering} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default MyStack;


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
 import Signin from './signin'
 import Welcome from './welcome';
 import Login from './login'
  import ForgetPassword from './forgetPassword'
 import Delivering from './Delivering'
import CreateAccount from './createAccount'
import Offer from './offer'
import Burger from './burgers';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerTransparent: false,
  headerTitle: null,
  headerLeft: null,
};

Stack.Navigator.defaultProps = {
  headerMode: 'none',
};




function MyStack(navigation) {  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="burger">
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="signin" component={Signin} />
        <Stack.Screen name="burger" component={Burger} />
        <Stack.Screen name="createAccount" component={CreateAccount} />
        <Stack.Screen name="offer" component={Offer} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="forgetPassword" component={ForgetPassword} />
        <Stack.Screen name="Delivering" component={Delivering} />
      </Stack.Navigator>
     </NavigationContainer>
   );
 }

const SettingStackNavigator = (navigation) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
    </Stack.Navigator>
  );
}


export default MyStack;




