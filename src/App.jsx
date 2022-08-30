import styled from 'styled-components'
import Abilities from './components/Abilities'
import AboutMe from './components/AboutMe'
import Briefcase from './components/Briefcase'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <AppContainer>
      <Header />
      <AboutMe />
      <Briefcase />
      <Abilities />
      <Footer />
    </AppContainer>
  )
}
const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
` 
export default App
