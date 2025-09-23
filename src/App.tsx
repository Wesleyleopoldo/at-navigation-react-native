import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Sobre from './pages/Sobre';

import { options } from './styles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={{
          title: options.title,
          headerStyle: options.headerStyle,
          headerTitleStyle: options.headerTitleStyle,
          headerShown: false
        }}
        />
        <Stack.Screen name="Sobre" component={Sobre} 
        options={{
          title: options.title,
          headerStyle: options.headerStyle,
          headerTitleStyle: options.headerTitleStyle,
          headerShown: true,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}