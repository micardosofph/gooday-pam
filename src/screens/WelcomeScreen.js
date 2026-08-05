import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/casual_dog.png')}
                style={styles.image}
            />
            <Text style={styles.greeting}>Ótimo dia!</Text>
            <Text style={styles.description}>Como deseja acessar?</Text>
            <View>
                <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => navigation.navigate('Login')}>
                    <Image
                        source={require('../../assets/Google.png')}
                        style={styles.imageGoogle}
                    />
                    <Text style={styles.buttonText1}>Como deseja acessar?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.button2]} onPress={() => navigation.navigate('Signin')}>
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
        width: 35,
        height: 35,
        padding: 2,
        marginRight: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        position: 'absolute',
        left: 16,
    },


    button: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        padding: 8,
        borderRadius: 8,

        height: 64,
        width: 350,
    },
    button1: {
        backgroundColor: '#14C871',
    },
    button2: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#14C871',
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
        width: '100%',
        height: '32%',
        overflow: 'hidden',
        resizeMode: 'contain',
    },
    greeting: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#31414D',
        marginTop: 20,
    },
    description: {
        fontSize: 16,
        color: '#31414D',
        marginTop: 10,
        marginBottom: 45,
    },



});