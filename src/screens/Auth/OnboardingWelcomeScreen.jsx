import React from 'react';
import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

const OnboardingWelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/img/logo.png')} style={styles.image} resizeMode="cover" />
            <Text style={styles.title}>Let's Find Your Partner!</Text>
            <Pressable style={styles.btn} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btnText}>Get Started</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        color: '#C41941',
        marginBottom: 20,
    },
    btn: {
        width: '80%',
        marginTop: 10,
        paddingVertical: 4,
        borderRadius: 5,
        backgroundColor: '#C41941',
        color: '#FFFFFF',
    },
    btnText: {
        color: '#FFFFFF',
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default OnboardingWelcomeScreen;
