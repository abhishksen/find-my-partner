import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MainBanner = () => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('Matches');
        console.log("Navigate to view matches page");
    }
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/img/banner.png')} style={styles.bannerImage} />
            <View style={styles.overlay}>
                <Text style={styles.title}>Find Your Perfect Match</Text>
                <Text style={styles.slogan}>Trusted Matrimony & Matchmaking Service</Text>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>View Matches</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    bannerImage: {
        width: '100%',
        height: 300,
        objectFit: 'cover',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
    },
    slogan: {
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#C41941',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MainBanner;
