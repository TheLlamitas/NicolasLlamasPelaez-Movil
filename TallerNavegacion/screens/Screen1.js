import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Screen1({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen 1</Text>
            <Button title="Ir a Screen 2" onPress={() => navigation.navigate('Screen2', { message: 'Hola desde Screen1'})} />
            <Button title="Reeemplazar con Screen2" onPress={() => navigation.replace('Screen2', { message: 'Hola desde Screen1'})} />
            <Button 
                title="Vaya a la pantalla 2 con el parámetro true" 
                onPress={() => navigation.navigate('Screen2', {shouldNavigate: true})}
            />
            <Button 
                title="Vaya a la pantalla 2 con el parámetro false" 
                onPress={() => navigation.navigate('Screen2', {shouldNavigate: false})}
            />
            <Button 
                title="Volver a ImageScreen" 
                onPress={() => navigation.navigate('Home', { screen: 'Image' })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
        marginTop: 20,
    }
})