import React from "react";
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const optionsData = [
    { id: 1, title: 'Cambiar Tema' },
    { id: 2, title: 'Notificaciones' },
    { id: 3, title: 'Idioma' },
    { id: 4, title: 'Privacidad y Seguridad' },
    { id: 5, title: 'Conexion de Cuentas' },
    { id: 6, title: 'Modo Offline' },
];

export default function OptionsScreen({ navigation }) {

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.items} onPress={() => alert(`Seleccionaste ${item.title}`)}>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <Button title="Screen2" onPress={() => navigation.navigate('Screen2')}/>
            <Text style={styles.text}>Quiz Screen</Text>
            <FlatList data={optionsData} renderItem={renderItem} keyExtractor={item => item.id}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        padding: 16,
    },
    item: {
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f9c2ff',
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
    },
    text: {
        fontSize: 32,
    },
})