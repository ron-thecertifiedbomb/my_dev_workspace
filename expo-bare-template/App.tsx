// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/types/navigation';
import BottomTabs from './src/navigation/BottomTabs';
import LoginScreen from './src/screens/login/LoginScreen'; 


const App: React.FC = () => (

  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={BottomTabs} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
