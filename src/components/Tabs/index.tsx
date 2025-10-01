
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../../pages/Home";
import Sobre from "../../pages/Sobre";
import Contato from "../../pages/Contato";

const Tab = createBottomTabNavigator();

export default function Tabs() {
    
    return (
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
    );
}