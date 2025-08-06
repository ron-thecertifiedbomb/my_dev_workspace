import { Redirect } from 'expo-router';
import { Platform } from 'react-native';

export default function Index() {
    const loggedIn = false; 

    if (!loggedIn) {
        return <Redirect href="/(public)/login" />;
    }

    return Platform.select({
        web: <Redirect href="/(web)/home" />,
        default: <Redirect href="/(mobile)/home" />
    });
}