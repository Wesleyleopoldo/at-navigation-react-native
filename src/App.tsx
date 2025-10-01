import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";

import Home from './pages/Home';
import Sobre from './pages/Sobre';

import { options } from './styles';
import Contato from './pages/Contato';

const Tab = createBottomTabNavigator();

// "#2196f3" 23

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen
        name='Home'
        component={Home}
	      options={{
	        tabBarLabel: "Inicio",
	        tabBarIcon: ({color, size}) => {
	          return <Feather name="home" color={color} size={size} />
	        }
	      }}
        />

        <Tab.Screen
        name='Sobre'
        component={Sobre}
        options={{
          tabBarLabel: "Sobre",
          tabBarIcon: ({color, size}) => {
            return <Feather name="file-text" color={color} size={size}/>
          }
        }}
        />

        <Tab.Screen
        name='Contato'
        component={Contato}
        options={{
          tabBarLabel: "Contato",
          tabBarStyle: { display: "none" },
          tabBarIcon: ({color, size}) => {
            return <Feather name="phone-call" color={color} size={size}/>
          }
        }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
