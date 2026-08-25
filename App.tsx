import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoScreen from './screens/TodoScreen';
import StatsScreen from './screens/StatsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const stored = await AsyncStorage.getItem('todos');
      if (stored) setTodos(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to load todos:', e);
    }
  };

  const saveTodos = async (newTodos: any[]) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(newTodos));
      setTodos(newTodos);
    } catch (e) {
      console.error('Failed to save todos:', e);
    }
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = '';
              if (route.name === 'Todos') {
                iconName = focused ? 'checkbox-marked' : 'checkbox-blank-outline';
              } else if (route.name === 'Stats') {
                iconName = focused ? 'chart-box' : 'chart-box-outline';
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: '#ccc',
          })}
        >
          <Tab.Screen
            name="Todos"
            children={() => <TodoScreen todos={todos} saveTodos={saveTodos} />}
            options={{ title: 'My Tasks' }}
          />
          <Tab.Screen
            name="Stats"
            children={() => <StatsScreen todos={todos} />}
            options={{ title: 'Statistics' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
