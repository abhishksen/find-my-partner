import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExclusiveMatchmakingCard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exclusive & Personalised Matchmaking</Text>
            <Text style={styles.paragraph}>
                Are you ready to find your perfect match? Find Your Partner welcomes you to a world of trusted matchmaking and unparalleled success stories.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C41941', // Primary color
        padding: 20,
        borderRadius: 10,
        margin: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF',
    },
});

export default ExclusiveMatchmakingCard;
