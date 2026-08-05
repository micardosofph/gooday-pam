import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const LiveGoodScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Image source={require('../../assets/arrow-back-white.png')} />
            </TouchableOpacity>

            



            <StatusBar style="auto" />
        </View>
    )
}

export default LiveGoodScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14C871',
        padding: 32,
        paddingTop: 64,
    },
    backButton: {
        width: 32,
        height: 32,
    },
});