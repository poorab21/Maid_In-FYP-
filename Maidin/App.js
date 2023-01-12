import React from 'react';
import ReferenceForm from './Pages/ReferenceForm'
import SignUp from './Pages/SignUp';
import ModalBox from './Component/ModalReference';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pages/login';

const App = () => {
      const stack = createNativeStackNavigator();
      const options = {
            headerStyle : {
                  backgroundColor : '#36FF92',
            },
            headerTitleStyle : {
                  fontSize : 30,
            },
            headerTitleAlign : 'center'
      }

      return (
            <NavigationContainer>
                  <stack.Navigator initialRouteName='Registration'>
                        <stack.Screen 
                        name='Maid-In' 
                        component={SignUp}
                        options = {options}
                        />
                        <stack.Screen
                        name='References'
                        component={ModalBox}
                        options = {options}
                        />
                        <stack.Screen
                        name='login'
                        component={Login}
                        options = {{
                              ...options,
                              headerTitle : 'Sign In'
                        }}
                        />
                  </stack.Navigator>
            </NavigationContainer>
      )
}


export default App;
