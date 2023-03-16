import { useState, useEffect } from "react";
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as AuthSession from "expo-auth-session";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as WebBrowser from "expo-web-browser";
import FaceBookSvg from "../../svgs/FaceBookSvg";
import { FACEBOOKID } from "@env"

WebBrowser.maybeCompleteAuthSession();

export default function App() {
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
                    const userInfoResponse = await fetch(
                        `https://graph.facebook.com/me?access_token=${response.authentication.accessToken}&fields=id,name,picture.type(large)`
                    );
                    const userInfo = await userInfoResponse.json();
                    console.log(userInfo)
                    setUser(userInfo);
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


