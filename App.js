import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Dashboard from './Dashboard';
import Register0 from './Register0';
import Register1 from './Register1';
import Register2 from './Register2';
import Personal from './Personal';
import Appointment from './Appointment';
import CarStatus from './CarStatus';
import Contact from './Contact';
import InsurancePlan from './InsurancePlan';
import ReportAccident from './ReportAccident';
import CustomButton from './CustomButton';
import OCRPage from './OCRPage';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen
            name="Login"
            component={Login}
          />
          
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
          />

          <Stack.Screen
            name="Register0"
            component={Register0}
          />

          <Stack.Screen
            name="Register1"
            component={Register1}
          />
          
          <Stack.Screen
            name="Register2"
            component={Register2}
          />

          <Stack.Screen
            name="Personal"
            component={Personal}
          />

          <Stack.Screen
            name="Appointment"
            component={Appointment}
          />

          <Stack.Screen
            name="CarStatus"
            component={CarStatus}
          />

          <Stack.Screen
            name="Contact"
            component={Contact}
          />

          <Stack.Screen
            name="InsurancePlan"
            component={InsurancePlan}
          />

          <Stack.Screen
            name="ReportAccident"
            component={ReportAccident}
          />

          <Stack.Screen
            name="CustomButton"
            component={CustomButton}
          />


            <Stack.Screen
            name="OCRPage"
            component={OCRPage}
          />


          </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;