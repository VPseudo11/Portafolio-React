import styled from 'styled-components'
import Abilities from './components/Abilities'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Header from './components/Header'
import Profile from './components/Profile'
import SlideShow from './components/SlideShow'

function App() {

  return (
    <AppContainer>
      <Header />
      <Profile />
      <AboutMe />
      <SlideShow />
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
