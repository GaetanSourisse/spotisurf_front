import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from "./screen/Homescreen";
import Detailscreen from "./screen/Detailscreen";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homescreen}/>
          <Stack.Screen name="Detail" component={Detailscreen} />
        </Stack.Navigator>     
      </NavigationContainer>
    );
  
}








 
      
  

