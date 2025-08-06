// src/screens/LoginScreen.tsx

import { LoginScreenProps } from '../../types/navigation';
import { View, Text, StyleSheet, Button } from 'react-native';


const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    
    const handleLogin = () => {
        navigation.replace('Tabs'); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <Button title="Login" onPress={handleLogin} />
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

export default LoginScreen;
