import { useContext } from "react"
import { ThemeContext } from "../../context/theme-context"
import { Button, Wrapper } from "./styles"

const Btn = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Wrapper theme={theme}>
            <Button theme={theme}>Entrar para o time!</Button>
        </Wrapper>
    )
}

export default Btn