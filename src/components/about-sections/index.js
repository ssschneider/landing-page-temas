import { Container, Logo, Subtitle, Text, Texts, Title, Wrapper } from "./styles"
import { GameController } from "phosphor-react"
import { useContext } from "react"
import { ThemeContext } from "../../context/theme-context"

const AboutSections = ({ logo, title, subtitle }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Container theme={theme}>
            <Wrapper >
                {logo ? <Logo src={logo} /> : <GameController size={367}/>}

                <Texts>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur. Cursus non gravida facilisis donec. Lorem ipsum dolor sit amet consectetur. Cursus non gravida facilisis donec. Lorem ipsum dolor sit.
                    </Text>
                </Texts>
            </Wrapper>
        </Container>
    )
}

export default AboutSections