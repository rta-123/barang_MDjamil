import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Pages/Splash';
import HomePage from './Pages/HomePage';
import BarangPage from './Pages/BarangPage';
import PetugasPage from './Pages/PetugasPage';
import ProfilPage from './Pages/ProfilPage';
import TambahPetugasPage from './Pages/TambahPetugasPage';
import TambahBarangPage from './Pages/TambahBarangPage';
import EditBarangPage from './Pages/EditBarangPage';
import EditPetugasPage from './Pages/EditPetugasPage';

const Stack = createNativeStackNavigator();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Splash}>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfilPage"
            component={ProfilPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BarangPage"
            component={BarangPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PetugasPage"
            component={PetugasPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TambahPetugasPage"
            component={TambahPetugasPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditPetugasPage"
            component={EditPetugasPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="TambahBarangPage"
            component={TambahBarangPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EditBarangPage"
            component={EditBarangPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
