import { ImageBackground } from 'react-native'
import React from 'react'

export default function BackGround(props: {
    children: number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined
}) {
    return (
        <ImageBackground source={require("../assets/background.png")} resizeMode="cover" className="flex-1">
            {props.children}
        </ImageBackground>
    )
}