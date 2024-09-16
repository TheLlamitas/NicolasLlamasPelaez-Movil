import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Screen2({ navigation, route }) {
  // Verifica si los parámetros existen antes de desestructurarlos
  const { shouldNavigate, message } = route.params || {};  // Si no hay params, usa un objeto vacío

  useEffect(() => {
    if (shouldNavigate) {
      navigation.navigate('Screen3', {info: 'Hola desde Screen2'});
    }
  }, [shouldNavigate, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Screen 2</Text>
      {shouldNavigate !== undefined ? (
        shouldNavigate ? (
          <Text style={styles.message}>Redireccionando a Screen3...</Text>
        ) : (
          <Text style={styles.message}>Estas en Screen2</Text>
        )
      ) : (
        <Text style={styles.message}>No se recibió el parámetro shouldNavigate</Text>
      )}

      {message && <Text style={styles.messageText}>{message}</Text>}

      <Button title="Ir a Screen3" onPress={() => navigation.navigate('Screen3', {info: 'Hola desde Screen2'})} />
      <Button title="Reemplazar con Screen3" onPress={() => navigation.replace('Screen3', {info: 'Hola desde Screen2'})} />
      <Button title="Volver" onPress={() => navigation.goBack()} style={{ marginTop: 20 }}  />
      <Button 
        title="Volver a OptionsScreen" 
        onPress={() => navigation.navigate('Home', { screen: 'Option' })}
      />  
    </View>
  );
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
  message: {
    fontSize: 24,
    marginBottom: 20,
  },
  messageText: {
    fontSize: 24,
    color: 'blue',
    marginBottom: 20,
  },
});
