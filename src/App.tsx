import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useWindowDimensions } from "react-native";


import Home from './pages/Home';
import Sobre from './pages/Sobre';

import { options } from './styles';
import Contato from './pages/Contato';
import Tabs from './components/Tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// "#2196f3" 23

export default function App() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    
  <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        <Drawer.Screen name="Contato" component={Contato} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
