import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { s } from "./styles";
import { RootStackParamList } from "../../types/types";

type SobreScreenNavigationProp = RouteProp<RootStackParamList, "Sobre">;

export default function Sobre() {
    const route = useRoute<SobreScreenNavigationProp>();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params.nome === "" ? "Página Sobre" : route.params.nome
        });
    },[navigation, route.params.nome])

    return (
        <View style={s.container}>
            <Text>Página Sobre</Text>
            <Text>{route.params.nome}</Text>
            <Text>{route.params.email}</Text>
        </View>
    )
}