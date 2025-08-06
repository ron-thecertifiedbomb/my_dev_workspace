// src/screens/DetailsScreen.tsx
import { DetailsScreenProps } from '../../types/navigation';
import { View, Text, StyleSheet, Button } from 'react-native';

const DetailsScreen: React.FC<DetailsScreenProps> = ({ navigation }) => {

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Details</Text>
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

export default DetailsScreen;
