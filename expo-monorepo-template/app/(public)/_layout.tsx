import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function PublicLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="login"
                options={{
                    title: 'Sign In',
                    headerShown: false 
                }}
            />
            <Stack.Screen
                name="registration"
                options={{
                    title: 'Create Account',
                    headerShown: Platform.OS !== 'web', 
                    headerBackTitle: 'Back'
                }}
            />
        </Stack>
    );
}