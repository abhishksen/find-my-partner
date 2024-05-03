import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../components/home/Header';
import MainBanner from '../../components/home/MainBanner';
import ExclusiveMatchmakingCard from '../../components/home/ExclusiveMatchmakingCard';

const HomeScreen = ({ navigation }) => {
    const handleProfilePress = () => {
        // Navigate to profile view
        navigation.navigate('Profile');
        console.log("Navigate to view notification page");
    };

    return (
        <View style={styles.container}>
            <Header onIconPress={handleProfilePress} />
            <MainBanner />
            <ExclusiveMatchmakingCard />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});

export default HomeScreen;
