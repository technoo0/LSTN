import React from 'react'
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4_39)">
<path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM15 8H13.65C13.112 8 13 8.221 13 8.778V10H15L14.791 12H13V19H10V12H8V10H10V7.692C10 5.923 10.931 5 13.029 5H15V8Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4_39">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
`;





export default function FaceBookSvg() {
    return (
        <SvgXml xml={xml} width="20" height="20" />
    )
}