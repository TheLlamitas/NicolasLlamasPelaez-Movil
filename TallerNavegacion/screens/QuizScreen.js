import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, TextInput } from "react-native";


export default function QuizScreen({ navigation }) {

    const [answers, setAnswers] = useState({
        question1: 'Paris',
        question2: 'Oxigeno',
        question3: 'Portugues',
    });

    const handleAnswerChange = (question, value) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [question]: value,
        }));
    };

    return (
        <ScrollView contentConteinerStyle={styles.container}>
            <Button title="Screen3" onPress={() => navigation.navigate('Screen3')}/>
            <Text style={styles.text}>Quiz Screen</Text>

            <Text style={styles.question}>1. ¿Cual es la capital de francia?</Text>
            <View style={styles.options}>
                <TouchableOpacity onPress={() => handleAnswerChange('question1', 'Paris')}>
                    <Text style={styles.option}>A. Paris</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAnswerChange('question1', 'Londres')}>
                    <Text style={styles.option}>B. Londres</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAnswerChange('question1', 'Berlin')}>
                    <Text style={styles.option}>C. Berlin</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAnswerChange('question1', 'Madrid')}>
                    <Text style={styles.option}>D. Madrid</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.question}>2. ¿Cual es el elemento qiemico con simbolo 'O'?</Text>
            <View style={styles.options}>
                <TouchableOpacity onPress={() => handleAnswerChange('question1', 'Oxigeno')}>
                    <Text style={styles.option}>A. Oxigeno</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAnswerChange('question1', 'Oro')}>
                    <Text style={styles.option}>B. Oro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAnswerChange('question1', 'Osmio')}>
                    <Text style={styles.option}>C. Osmio</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleAnswerChange('question1', 'Oganeson')}>
                    <Text style={styles.option}>D. Oganeson</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.question}>3. ¿Cuál es el idioma oficial de Brasil?</Text>
            <TextInput 
            style={styles.input}
            placeholder="Escribe tu respues aqui"
            value={answers.question}
            onChangeText={text => handleAnswerChange('question3', text)}/>

            <TouchableOpacity style={styles.submitButton} onPress={() => alert('Respuestas enviadas!')}>
                <Text style={styles.submitButtonText}>Enviar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
    },
    question: {
        fontSize: 18,
        marginVertical: 10,
    },
    options: {
        marginVertical: 10,
    },
    option: {
        fontSize: 16,
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    submitButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 20
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    text: {
        fontSize: 32,
    },
})