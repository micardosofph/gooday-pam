import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SigninScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Acesse</Text>
            <Text style={styles.subtitle}>com E-mail e senha</Text>
            <View>
                <Text>E-mail</Text>
                <TextInput
                    placeholder="Digite seu E-mail"
                    style={styles.input}
                />
            </View>
            <View>
                <Text>Senha</Text>
                <TextInput
                    placeholder="Digite sua Senha"
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.checkboxAndForgotContainer}>
                <View style={styles.checkboxContainer}>
                    <TouchableOpacity style={styles.checkbox}>
                    </TouchableOpacity>
                    <Text>Lembrar senha</Text>
                </View>
                <TouchableOpacity>
                    <Text>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.button1]}>
                    <Text style={styles.buttonText1}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.button2]} onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.buttonText2}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.socialsContainer}>
                <View style={styles.lineContainer}>
                    <View style={styles.line} />
                    <Text>Ou continue com</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.socialsIconsContainer}>
                    <Image source={require('../../assets/Google.png')} />
                    <Image source={require('../../assets/Facebook.png')} />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default SigninScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 32,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 32,
    },
    input: {
        backgroundColor: '#ebebeb',
        borderRadius: 4,
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    checkbox: {
        borderWidth: 1,
        borderColor: '#14C871',
        borderRadius: 4,
        padding: 10,
        marginRight: 10,
        width: 24,
        height: 24,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxAndForgotContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    socialsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    socialsIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 48,
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        gap: 16,

        marginBottom: 64,
    },

    button: {
        flex: 1,
        padding: 16,
        borderRadius: 4,
    },

    button1: {
        backgroundColor: '#14C871',
    },
    buttonText1: {
        color: '#fff',
        textAlign: 'center',
    },

    button2: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#14C871',
    },
    buttonText2: {
        color: '#000000',
        textAlign: 'center',
    },
    line: {
        height: 1,
        width: 100,
        backgroundColor: '#000',
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
    },
});