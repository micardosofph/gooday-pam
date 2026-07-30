

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logoGooday.png')}
                style={styles.image}
            />
            <StatusBar style="auto" />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#14C871',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    }
});