import * as React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';
import BackGround from '../components/BackGround';

function HomeScreen({ navigation }: { navigation: any }) {
    return (

        <BackGround>

            <View className="flex-1 items-center justify-center ">
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        </BackGround>

    );
}

export default HomeScreen

// ... other code from the previous section