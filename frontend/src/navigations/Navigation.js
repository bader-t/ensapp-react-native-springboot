import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Register from '../screens/Register';
import Home from '../screens/Home';




const AppContainer = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName={Register} >
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppContainer;