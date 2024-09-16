import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, Image } from "react-native";

export default function ImageScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button title="Screen1" onPress={() => navigation.navigate('Screen1')} />
            <Text style={styles.title}>Image Screen</Text>
                 
            <Image source={{ uri: 'https://somoskudasai.com/wp-content/uploads/2024/04/image-66.png' }} style={styles.image}/>
            <Image source={{ uri: 'https://m.media-amazon.com/images/S/pv-target-images/2c9d006d4c570797f72e10cecf9389373b0c31794043ca0a3418ac8673298acb.jpg' }} style={styles.image}/>
            <Image source={{ uri: 'https://somoskudasai.com/wp-content/uploads/2022/02/portada_eighty-six-47.jpg' }} style={styles.image}/>
            <Image source={{ uri: 'https://somoskudasai.com/wp-content/uploads/2022/09/tumblr_7640a71f4fb6991053572139cea4d403_e9d2fe77_1280.jpg' }} style={styles.image}/>
            <Image source={{ uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWzp3NJV_0gXgpw79TciSeT9qcNF8gcV4p7PUN0oXROLMK82L2XfrvFX__dNM45LZAshGdMqS6YrBRwefFsUx2iYmovft8t4p_YP2v50HicjwLU_SiWs74-VLLyIEwfFHTsVctVT3_24iTWKOHQct3AoIqduyx2_MF8jw04RWMKQj624N2m_lQfyek/s2000/86%201.jpg' }} style={styles.image}/>
            <Image source={{ uri: 'https://a.storyblok.com/f/178900/750x422/64589bd73d/86-live-reading-thumbnail.jpg' }} style={styles.image}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 15,
        resizeMode: 'cover',
    },
});

