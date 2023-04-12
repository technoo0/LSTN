import React from 'react'
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9704 10L0.5 19.1502V0.849757L16.9704 10Z" fill="white" stroke="#C2C2C2"/>
</svg>

`;





export default function PlaySvg(props) {
    return (
        <SvgXml {...props} xml={xml} width="29" height="29" />
    )
}