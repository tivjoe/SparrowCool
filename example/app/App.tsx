import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// 公用
import { AppStack } from './navigation';

interface Props { }

const App: React.FC<Props> = React.memo(({ }) => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
})

export default App;
