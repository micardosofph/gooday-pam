import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/casual_dog.png')}
                style={styles.image}
            />
            <Text style={styles.greeting}>Ótimo dia!</Text>
            <Text style={styles.description}>Como deseja acessar?</Text>
            <View>
                <TouchableOpacity style={styles.button1}>
                    <Image
                        source={require('../assets/google.png')}
                        style={styles.imageGoogle}
                    />
                    <Text style={styles.buttonText1}>Como deseja acessar?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText2}>Outras opções</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageGoogle: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    button1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#14C871',
        padding: 10,
        borderRadius: 5,
    },
    button2: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#14C871',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText1: {
        color: '#fff',
        fontSize: 16,
    },
    buttonText2: {
        color: '#31414D',
        fontSize: 16,
    },
    image: {
        width: 200,
        height: 200,   
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#31414D',
        marginTop: 20,
    },  
    description: {
        fontSize: 16,
        color: '#31414D',
        marginTop: 10,
    },



});