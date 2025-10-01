import { View, Text, Button } from "react-native";
import { s } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/types";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function Home() {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    function navegaSobre() {
        navigation.navigate("Sobre", {nome: "Wesley", email: "contoso@exemplo.com"});
    }

    return (
        <View style={s.container}>
            <Text>Tela Home</Text>
            <Button title="Sobre" onPress={navegaSobre} />
        </View>
    )
}