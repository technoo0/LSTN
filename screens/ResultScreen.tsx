import { View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import BackGround from '../components/BackGround';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackArrowSvg from '../svgs/BackArrow';
import UserCard from '../components/UserCard';
import CancelSvg from '../svgs/CancelSvg';

function ResultScreen({ route, navigation }: { route: any, navigation: any }) {
    const { users } = route.params
    useEffect(() => {
        // console.log(users)
    }, [])
    return (
        <BackGround>
            <SafeAreaView className='flex-1' >

                <View className='w-full items-end pr-4'>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <CancelSvg />
                    </TouchableOpacity>
                </View>
                <ScrollView className='flex-1 px-4 mt-5'>
                    {users.map((user, index) =>
                        <UserCard data={user} key={index} />
                    )}

                </ScrollView>

            </SafeAreaView>
        </BackGround>
    );
}
export default ResultScreen