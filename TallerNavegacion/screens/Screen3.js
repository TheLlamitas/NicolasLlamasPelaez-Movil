import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";


export default function Screen3({ navigation, route }) {

    const { info  } = route.params || {};

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen 3</Text>
            <Text style={styles.infoText}>{info}</Text>
            <Button title="Volver a Screen1" onPress={() => navigation.navigate('Screen1')} />
            <Button title="Reemplazar con Screen1" onPress={() => navigation.replace('Screen1')} />
            <Button title="Volver" onPress={() => navigation.goBack()} style={{ marginTop: 20 }}  />
            <Button 
                title="Restablecer y volver a Screen1" 
                onPress={() => navigation.reset({
                    index: 0,
                    routes: [{ name: 'Screen1'}],
                })}  
            />
            <Button 
                title="Volver a QuizScreen" 
                onPress={() => navigation.navigate('Home', { screen: 'Quiz' })}
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
    },
    infoText: {
        fontSize: 24,
        marginBottom: 20,
      },
})