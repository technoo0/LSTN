import { View, Text, Button } from 'react-native';
import BackGround from '../components/BackGround';

function DetailsScreen({ navigation }: { navigation: any }) {
    return (
        <BackGround>

            <View className="flex-1 items-center justify-center ">
                <Text>Details Screen</Text>
                <Button
                    title="Go back"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </BackGround>
    );
}
export default DetailsScreen