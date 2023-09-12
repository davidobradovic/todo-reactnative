import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeTab from './tabs/HomeTab';
import FavoritesTab from './tabs/FavoritesTab'
import FinishedTab from './tabs/FinishedTab'
import { Home, ShieldCheck, Star } from 'lucide-react-native';
import { AppProvider } from './context/AppContext';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator >
          <Tab.Screen options={{
            headerShown: false,
            tabBarActiveTintColor: '#156adc',
            tabBarIcon: ({ size, color }) => {
              return <Home size={size} color={color} />
            }
          }} name='Home' component={HomeTab} />
          <Tab.Screen options={{
            headerShown: false,
            tabBarActiveTintColor: '#156adc',
            tabBarIcon: ({ size, color }) => {
              return <Star size={size} color={color} />
            }
          }} name='Favorite' component={FavoritesTab} />
          <Tab.Screen options={{
            headerShown: false,
            tabBarActiveTintColor: '#156adc',
            tabBarIcon: ({ size, color }) => {
              return <ShieldCheck size={size} color={color} />
            }
          }} name='Finished' component={FinishedTab} />

        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  )
}

export default App

const styles = StyleSheet.create({})