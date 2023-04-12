import { useState, useEffect } from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as AuthSession from "expo-auth-session";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import FaceBookSvg from "../../svgs/FaceBookSvg";
import { FACEBOOKID } from "@env"
import Api from "../../utils/Api";
import { HandelNewUser, Login } from "../../utils/Auth";

WebBrowser.maybeCompleteAuthSession();

export default function App({ navigation }) {
    const [user, setUser] = useState(null);
    const [request, response, promptAsync] = Facebook.useAuthRequest({
        clientId: FACEBOOKID,
    });

    if (request) {
        console.log(
            "You need to add this url to your authorized redirect urls on your Facebook app: " +
            request.redirectUri
        );
    }

    useEffect(() => {
        if (response && response.type === "success" && response.authentication) {
            (async () => {
                if (response.authentication) {
                    const res = await Api.post('/auth/facebook', { token: response.authentication.accessToken })
                    console.log(res.data)
                    if (res.data.msg == "login") {
                        await Login(res.data.jwt)
                        navigation.navigate('Home')
                    } else if (res.data.msg == "newUser") {
                        console.log("new User")
                        const user = await HandelNewUser(res.data.jwt)
                        console.log("serlizen user error", user)
                        navigation.navigate("UserInfo", {
                            user,
                        })
                    }
                    // setUser(userInfo);
                }
            })();
        }
    }, [response]);

    const handlePressAsync = async () => {
        const result = await promptAsync();
        if (result.type !== "success") {
            alert("Uh oh, something went wrong");
            return;
        }
    };

    return (
        <View className="mb-2">
            <TouchableOpacity
                className="bg-[#3B5998] w-72 py-3 rounded-3xl items-center flex-row justify-center"
                onPress={handlePressAsync}
            >
                <FaceBookSvg />
                <Text className='text-white text-md pl-2'>Continue with Facebook</Text>
            </TouchableOpacity>
        </View>
    );
}


