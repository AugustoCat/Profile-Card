import { useState } from 'react'
import Profile from './Components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Profile name="Augusto Catuzzo" 
      carrer="Web development javascript student" 
      number="+55 (45) 99914-9729"
      email="au.catuzzo@gmail.com"
      githubUrl="www.github.com/AugustoCat"
      linkedinUrl="www.linkedin.com/in/augusto-catuzzo"
      instagramUrl="https://www.instagram.com/acatuzzo/"/>
    </>
  )
}

export default App
