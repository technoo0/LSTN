import React from 'react'
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.098 10.638C15.23 8.341 8.85 8.13 5.157 9.251C4.564 9.431 3.937 9.096 3.758 8.503C3.578 7.91 3.912 7.283 4.506 7.103C8.745 5.816 15.791 6.065 20.244 8.708C20.777 9.025 20.952 9.713 20.636 10.246C20.32 10.779 19.631 10.955 19.098 10.638ZM18.972 14.041C18.7 14.481 18.125 14.619 17.685 14.349C14.46 12.367 9.543 11.792 5.727 12.95C5.233 13.1 4.71 12.821 4.56 12.327C4.411 11.832 4.69 11.311 5.184 11.16C9.542 9.838 14.96 10.478 18.664 12.755C19.104 13.025 19.242 13.602 18.972 14.041ZM17.503 17.308C17.288 17.662 16.827 17.773 16.475 17.557C13.657 15.835 10.11 15.446 5.933 16.4C5.531 16.492 5.13 16.24 5.038 15.838C4.946 15.435 5.197 15.034 5.6 14.942C10.171 13.897 14.092 14.347 17.255 16.28C17.608 16.495 17.719 16.956 17.503 17.308ZM12 0C5.373 0 0 5.373 0 12C0 18.628 5.373 24 12 24C18.628 24 24 18.628 24 12C24 5.373 18.628 0 12 0Z" fill="black"/>
</svg>

`;





export default function SpotifySvg() {
    return (
        <SvgXml xml={xml} width="24" height="24" />
    )
}