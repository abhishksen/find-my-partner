import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ProfileDetailsScreen = ({ route, navigation }) => {
    const { id, name, age, location, imageUrl } = route.params;
    const [connect, setConnect] = useState(false);

    const handleConnectPress = () => {
        // Implement logic to connect with the user
        console.log("Connect with user:", id);
        setConnect(!connect);
    };

    return (
        <View style={styles.container}>
            {/* <Text style={styles.heading}>Profile Details</Text> */}
            <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
            <View style={styles.profileInfo}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.label}>Age:</Text>
                <Text style={styles.text}>{age}</Text>
                <Text style={styles.label}>Location:</Text>
                <Text style={styles.text}>{location}</Text>
            </View>
            <TouchableOpacity style={styles.connectButton} onPress={handleConnectPress}>
                <Text style={styles.connectButtonText}>{connect ? 'Requested' : 'Connect'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300, // You can adjust the height as needed
        marginBottom: 20,
        borderRadius: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#C41941',
        marginBottom: 20,
    },
    profileInfo: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    connectButton: {
        backgroundColor: '#C41941',
        paddingVertical: 12,
        borderRadius: 5,
    },
    connectButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ProfileDetailsScreen;
