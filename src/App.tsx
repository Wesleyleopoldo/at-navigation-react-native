import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons";

import Home from './pages/Home';
import Sobre from './pages/Sobre';

import { options } from './styles';
import Contato from './pages/Contato';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen
        name='Home'
        component={Home}
	      options={{
	        tabBarLabel: "Inicio",
	        tabBarIcon: () => {
	          return <Feather name="home" color={"blue"} size={23} />
	        }
	}}
        />

        <Tab.Screen
        name='Sobre'
        component={Sobre}
        />

        <Tab.Screen
        name='Contato'
        component={Contato}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
