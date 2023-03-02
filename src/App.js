import { ThemeContext, ThemeProvider } from "./context/theme-context" 
import Header from "./components/header";
import { Banner, Wrapper } from "./styles/main";
import Banner01 from "./assets/banner-1.svg"
import Logo from "./assets/logo.svg"
import Banner02 from "./assets/banner-2.svg"
import AboutSections from "./components/about-sections";
import Btn from "./components/button";
import { useContext } from "react";


function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeProvider>
      <Header />
      <Wrapper theme={theme}>
        <Banner src={Banner01} alt="Controle Super Nintendo"/>
        <AboutSections 
          logo={Logo} 
          title="Company Name" 
          subtitle="We believe in our gamers."
          />
        <Banner src={Banner02} alt="Menina em frente a um fliperama"/>
        <AboutSections 
          title="T E A M  N A M E" 
          subtitle="We believe in our team!"
          />
          <Btn />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
