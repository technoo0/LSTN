module.exports = {

    content: ["./App.{js,jsx,ts,tsx}"
        , "./components/*.{js,jsx,ts,tsx}"
        , "./screens/*.{js,jsx,ts,tsx}"
        , "./svgs/*.{js,jsx,ts,tsx}"
        , "./utils/*.{js,jsx,ts,tsx}"
        , "./components/Auth/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                'primary': "#FFB801",
                'secondary': '#814783',
                'text-primary': "#ffffff"
            },

        },
    },
    plugins: [],
}