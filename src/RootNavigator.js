import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CustomTabBar from './CustomTabBar';

const RootNavigator = () => {
    return(
        <NavigationContainer>
            <CustomTabBar/>
        </NavigationContainer>
    )
}

export default RootNavigator;