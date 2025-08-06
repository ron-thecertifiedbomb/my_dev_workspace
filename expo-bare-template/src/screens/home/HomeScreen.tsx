// src/screens/HomeScreen.tsx


import { HomeScreenProps } from '../../types/navigation';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

    const handleLogout = () => {
       navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
});

export default HomeScreen;
