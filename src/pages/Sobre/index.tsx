import React, { useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation, RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { s } from "./styles";
import { RootStackParamList } from "../../types/types";

import Contato from "../Contato";

type SobreScreenRouteProp = RouteProp<RootStackParamList, "Sobre">;
type ContatoScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Contato">;

export default function Sobre() {
    const route = useRoute<SobreScreenRouteProp>();
    const navigation = useNavigation<ContatoScreenNavigationProp>();

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
            <Button
            title="Tela de Contato"
            onPress={() => navigation.navigate("Contato", {contato: "8199999999"})}
            />

            <Button
            title="Voltar"
            onPress={() => navigation.goBack()}
            />
        </View>
    )
}