import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileCreationScreen = () => {
    const [step, setStep] = useState(1);

    // States for each step
    const [basicDetails, setBasicDetails] = useState({ name: '', age: '', location: '' });
    const [education, setEducation] = useState({ degree: '', institution: '', year: '' });
    const [familyDetails, setFamilyDetails] = useState({ fatherName: '', motherName: '', siblings: '' });
    const [partnerPreferences, setPartnerPreferences] = useState({ minAge: '', maxAge: '', location: '' });
    const [verification, setVerification] = useState({ idProof: '', photo: '' });

    const navigation = useNavigation();

    const nextStep = () => {
        if (step < 5) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return renderBasicDetailsForm();
            case 2:
                return renderEducationForm();
            case 3:
                return renderFamilyDetailsForm();
            case 4:
                return renderPartnerPreferencesForm();
            case 5:
                return renderVerificationForm();
            default:
                return null;
        }
    };

    const handleSubmit = () => {
        console.log('Basic Details:', basicDetails);
        console.log('Education:', education);
        console.log('Family Details:', familyDetails);
        console.log('Partner Preferences:', partnerPreferences);
        console.log('Verification:', verification);
        // Submit logic here
        // After successful submission, navigate to the home screen
        navigation.navigate('Main');
    }

    const renderBasicDetailsForm = () => {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.title}>Basic Details</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={basicDetails.name}
                    onChangeText={(text) => setBasicDetails({ ...basicDetails, name: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Age"
                    value={basicDetails.age}
                    onChangeText={(text) => setBasicDetails({ ...basicDetails, age: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Location"
                    value={basicDetails.location}
                    onChangeText={(text) => setBasicDetails({ ...basicDetails, location: text })}
                />
                <Pressable style={styles.btn} onPress={nextStep}>
                    <Text style={styles.btnText}>Next</Text>
                    <MaterialIcons name="arrow-forward" size={24} color="#FFFFFF" />
                </Pressable>
            </View>
        );
    };

    const renderEducationForm = () => {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.title}>Education Background</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Degree"
                    value={education.degree}
                    onChangeText={(text) => setEducation({ ...education, degree: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Institution"
                    value={education.institution}
                    onChangeText={(text) => setEducation({ ...education, institution: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Year"
                    value={education.year}
                    onChangeText={(text) => setEducation({ ...education, year: text })}
                />
                <Pressable style={styles.btn} onPress={nextStep}>
                    <Text style={styles.btnText}>Next</Text>
                    <MaterialIcons name="arrow-forward" size={24} color="#FFFFFF" />
                </Pressable>
                <Pressable style={styles.btn} onPress={prevStep}>
                    <Text style={styles.btnText}>Previous</Text>
                    <MaterialIcons name="arrow-back" size={24} color="#FFFFFF" />
                </Pressable>
            </View>
        );
    };

    const renderFamilyDetailsForm = () => {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.title}>Family Details</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Father's Name"
                    value={familyDetails.fatherName}
                    onChangeText={(text) => setFamilyDetails({ ...familyDetails, fatherName: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Mother's Name"
                    value={familyDetails.motherName}
                    onChangeText={(text) => setFamilyDetails({ ...familyDetails, motherName: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Number of Siblings"
                    value={familyDetails.siblings}
                    onChangeText={(text) => setFamilyDetails({ ...familyDetails, siblings: text })}
                />
                <Pressable style={styles.btn} onPress={nextStep}>
                    <Text style={styles.btnText}>Next</Text>
                    <MaterialIcons name="arrow-forward" size={24} color="#FFFFFF" />
                </Pressable>
                <Pressable style={styles.btn} onPress={prevStep}>
                    <Text style={styles.btnText}>Previous</Text>
                    <MaterialIcons name="arrow-back" size={24} color="#FFFFFF" />
                </Pressable>
            </View>
        );
    };

    const renderPartnerPreferencesForm = () => {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.title}>Partner Preferences</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Minimum Age"
                    value={partnerPreferences.minAge}
                    onChangeText={(text) => setPartnerPreferences({ ...partnerPreferences, minAge: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Maximum Age"
                    value={partnerPreferences.maxAge}
                    onChangeText={(text) => setPartnerPreferences({ ...partnerPreferences, maxAge: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Location"
                    value={partnerPreferences.location}
                    onChangeText={(text) => setPartnerPreferences({ ...partnerPreferences, location: text })}
                />
                <Pressable style={styles.btn} onPress={nextStep}>
                    <Text style={styles.btnText}>Next</Text>
                    <MaterialIcons name="arrow-forward" size={24} color="#FFFFFF" />
                </Pressable>
                <Pressable style={styles.btn} onPress={prevStep}>
                    <Text style={styles.btnText}>Previous</Text>
                    <MaterialIcons name="arrow-back" size={24} color="#FFFFFF" />
                </Pressable>
            </View>
        );
    };

    const renderVerificationForm = () => {
        return (
            <View style={styles.formContainer}>
                <Text style={styles.title}>Verification</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ID Proof"
                    value={verification.idProof}
                    onChangeText={(text) => setVerification({ ...verification, idProof: text })}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Photo"
                    value={verification.photo}
                    onChangeText={(text) => setVerification({ ...verification, photo: text })}
                />
                <Pressable style={styles.submitBtn} onPress={handleSubmit}>
                    <Text style={styles.btnText}>Submit</Text>
                    <MaterialIcons name="check" size={24} color="#FFFFFF" />
                </Pressable>
                <Pressable style={styles.btn} onPress={prevStep}>
                    <Text style={styles.btnText}>Previous</Text>
                    <MaterialIcons name="arrow-back" size={24} color="#FFFFFF" />
                </Pressable>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {renderStepContent()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#C41941',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#FFFFFF',
        marginBottom: 10,
        padding: 10,
        borderBottomColor: '#C41941',
        borderBottomWidth: 1,
        borderRadius: 5,
        width: '80%',
    },
    btn: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C41941',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    submitBtn: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E1E1E',
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
});

export default ProfileCreationScreen;
