
import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function WebLayout() {
    return (
        <View style={styles.container}>
            <Slot />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        maxWidth: 1024, 
        marginHorizontal: 'auto',
        paddingHorizontal: 16,
    }
});