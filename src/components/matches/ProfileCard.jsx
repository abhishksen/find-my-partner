import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileCard = ({ id, name, age, location, imageUrl, onPress, navigation }) => {
    const handleProfilePress = () => {
        // Navigate to individual profile screen
        navigation.navigate('Profile Details', { id, name, age, location, imageUrl });
    };

    return (
        <View style={styles.card}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.overlay}>
                <View style={styles.info}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.details}>{age} years, {location}</Text>
                </View>
                <TouchableOpacity style={styles.connectButton} onPress={handleProfilePress}>
                    <Text style={styles.connectButtonText}>View Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    card: {
        width: 320,
        height: '100%',
        borderRadius: 10,
        marginRight: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        paddingVertical: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    info: {
        marginBottom: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    details: {
        fontSize: 16,
        color: '#FFFFFF',
    },
    connectButton: {
        backgroundColor: '#C41941',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    connectButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ProfileCard;
