import React from 'react'
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="203" height="200" viewBox="0 0 203 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M34.4416 168.754C41.6266 156.216 52.2531 144.034 65.481 138.21C74.9688 145.363 86.728 149.673 99.5 149.673C112.26 149.673 124.012 145.376 133.488 138.222C146.702 144.214 157.488 156.752 164.751 169.515C166.956 167.461 169.062 165.303 171.064 163.049C166.17 159.403 163 153.572 163 147C163 135.954 171.954 127 183 127C185.708 127 188.291 127.538 190.647 128.514C193.475 119.513 195 109.935 195 100C195 47.533 152.467 5 100 5C47.533 5 5 47.533 5 100C5 127.046 16.3024 151.453 34.4416 168.754ZM167.19 174.065C170.131 171.395 172.913 168.553 175.518 165.554C177.829 166.486 180.355 167 183 167C194.046 167 203 158.046 203 147C203 140.494 199.893 134.713 195.082 131.061C198.274 121.283 200 110.843 200 100C200 44.7715 155.228 0 100 0C44.7715 0 0 44.7715 0 100C0 128.961 12.3116 155.047 31.9867 173.309C49.8313 189.873 73.733 200 100 200C124.162 200 146.323 191.43 163.609 177.165C164.827 176.16 166.021 175.126 167.19 174.065ZM143.542 93.048C143.542 117.365 123.824 137.09 99.5 137.09C75.1765 137.09 55.4584 117.365 55.4584 93.048C55.4584 68.7181 75.1765 49 99.5 49C123.824 49 143.542 68.7181 143.542 93.048ZM171.114 145.886H181.886V135.114C181.886 134.499 182.385 134 183 134C183.615 134 184.114 134.499 184.114 135.114V145.886H194.886C195.501 145.886 196 146.385 196 147C196 147.615 195.501 148.114 194.886 148.114H184.114V158.886C184.114 159.501 183.615 160 183 160C182.385 160 181.886 159.501 181.886 158.886V148.114H171.114C170.499 148.114 170 147.615 170 147C170 146.385 170.499 145.886 171.114 145.886Z" fill="white"/>
</svg>

`;





export default function AddImage() {
    return (
        <SvgXml xml={xml} width="203" height="200" />
    )
}