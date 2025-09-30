import { View, Text, Button } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/types";

type ContatoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Contato">;

export default function Contato() {
    const navigation = useNavigation<ContatoScreenNavigationProp>();

    function handleHome() {
        navigation.dispatch(StackActions.popToTop());
    }

    return (
        <View>
            <Text>Página de contato do app.</Text>
            <Button title="Voltar para a Home" onPress={handleHome} />
        </View>
    )
}