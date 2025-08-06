// src/navigation/BottomTabs.tsx
import React from 'react';

import HomeScreen from '../screens/home/HomeScreen';
import DetailsScreen from '../screens/details/DetailsScreen';
import { Tab } from '../types/navigation';



const BottomTabs: React.FC = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
);

export default BottomTabs;
