// src/screens/SettingsScreen.tsx
import { SettingsScreenProps } from '../../types/navigation';
import { View, Text, StyleSheet } from 'react-native';



const SettingsScreen: React.FC<SettingsScreenProps> = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings</Text>
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

export default SettingsScreen;
