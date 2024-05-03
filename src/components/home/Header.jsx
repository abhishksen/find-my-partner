import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Header = ({ onIconPress }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/img/logo.png')} style={styles.logo} />
            <TouchableOpacity onPress={onIconPress}>
                <FontAwesome name="bell" size={30} color="#C41941" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 16,
        marginTop: 40,
    },
    logo: {
        width: 50,
        height: 40,
        objectFit: 'contain',

    },
});

export default Header;
