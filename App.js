import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreens'
import MainDishesScreens from './screens/MainDishesScreens'
import DessertsScreens from './screens/DessertsScreens';
import DrinksScreens from './screens/DrinksScreens';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#ff6f00',
          tabBarInactiveTintColor: '#999',
          tabBarStyle: {
            BackgroundColor: '#fff',
            paddingBottom: 8,
            paddingTop: 8,
            height: 65,
            borderTopWitdh: 1,
            borderTopColor: '#ff30b2',
          },
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '600',
            marginTop: 2,
          },
          headerStyle: {
            backgroundColor: '#ff9800',
            elevation: 5,
            shadowOpacity: 0.3,
            shadowRadius: 5,
          },
          headerTintColor: '#fff',
          headerTintStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      >

        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size }}>🍜</Text>
            ),
            headerTitle: 'ร้านอาหารอร่อย',
          }}
        />

        <Tab.Screen
          name='MainDishes'
          component={MainDishesScreens}
          options={{
            tabBarLabel: 'ของคาว',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size }}>🍜</Text>
            ),
            headerTitle: 'ร้านอาหารอร่อย',
          }}
        />
        
        <Tab.Screen
          name='Desserts'
          component={DessertsScreens}
          options={{
            tabBarLabel: 'ของหวาน',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size }}>🍪</Text>
            ),
            headerTitle: 'ร้านอาหารอร่อย',
          }}
        />

        <Tab.Screen
          name='Drinks'
          component={DrinksScreens}
          options={{
            tabBarLabel: 'เครื่องดื่ม',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size }}>🍸</Text>
            ),
            headerTitle: 'ร้านอาหารอร่อย',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}