import { Logo, ThemeToggler, Wrapper } from "./styles"
import LogoImage from "../../assets/logo.svg"
import { Moon, Sun } from "phosphor-react"
import { useContext } from "react"
import { ThemeContext ,themes } from "../../context/theme-context"

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <Wrapper theme={theme}>
            <Logo src={LogoImage} alt="Logo" />
            <ThemeToggler onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>
                {theme === themes.light ? 
                    <Moon size={48} weight="fill" fill="#22F500"/> : 
                    <Sun size={48} weight="fill" fill="#D1FBCB"
                />}
            </ThemeToggler>
        </Wrapper>
    )
}

export default Header