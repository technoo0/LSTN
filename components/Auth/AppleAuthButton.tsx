import * as AppleAuthentication from 'expo-apple-authentication';
import { View, StyleSheet } from 'react-native';
import Api from '../../utils/Api';
import { HandelNewUser, Login } from '../../utils/Auth';
export default function AppleAuthButton({ navigation }) {
    return (
        <View className='justify-center items-center mb-2' >
            <AppleAuthentication.AppleAuthenticationButton
                buttonType={AppleAuthentication.AppleAuthenticationButtonType.CONTINUE}
                buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                cornerRadius={20}
                className="w-72 h-12"
                onPress={async () => {
                    try {
                        const credential = await AppleAuthentication.signInAsync({
                            requestedScopes: [
                                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                                AppleAuthentication.AppleAuthenticationScope.EMAIL,
                            ],
                        });
                        // signed in

                        try {

                            const res = await Api.post("/auth/apple", credential, {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                            console.log("done")
                            console.log(res.data)
                            if (res.data.msg == "login") {
                                await Login(res.data.jwt)
                                navigation.navigate('Home')
                            } else if (res.data.msg == "newUser") {
                                console.log("new User")
                                const user = await HandelNewUser(res.data.jwt)

                                navigation.navigate("UserInfo", {
                                    user,
                                })
                            }
                        } catch (e) {
                            console.log(e)

                        }
                    } catch (e: any) {
                        if (e.code === 'ERR_REQUEST_CANCELED') {
                            // handle that the user canceled the sign-in flow
                        } else {
                            // handle other errors
                        }
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    button: {
        width: 200,
        height: 44,
    },
});
