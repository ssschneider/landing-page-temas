import { createContext, useState } from "react"

export const themes = {
    light: {
        main: "#D1FBCB",
        text: "#030303",
        background: "#f1f1f1"
    },
    dark: {
        main: "#22F500",
        text: "#f1f1f1",
        background: "#030303"
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}