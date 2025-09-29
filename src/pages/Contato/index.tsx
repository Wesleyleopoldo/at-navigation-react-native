import { View, Text } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/types";

type ContatoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function Contato() {
    return (
        <View>
            <Text>Página de contato do app.</Text>
        </View>
    )
}