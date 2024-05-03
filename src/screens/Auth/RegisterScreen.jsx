import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    // const navigation = useNavigation();

    const handleRegister = () => {
        // Implement register logic
        // After successful registration, navigate to profile creation screen
        navigation.navigate('ProfileCreation');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Let's Get Started!</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <Pressable style={styles.btn} onPress={handleRegister}>
                <Text style={styles.btnText}>Register</Text>
            </Pressable>
            <Text style={styles.switchText}>Already have an account? <Text style={styles.switchLink} onPress={() => navigation.navigate('Login')}>Login</Text></Text>
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
    title: {
        fontSize: 24,
        color: '#C41941',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#FFFFFF',
        width: '80%',
        borderBottomColor: '#C41941',
        borderBottomWidth: 1,
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
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
    switchText: {
        marginTop: 20,
        color: '#333',
    },
    switchLink: {
        color: '#C41941',
    },
});

export default RegisterScreen;
