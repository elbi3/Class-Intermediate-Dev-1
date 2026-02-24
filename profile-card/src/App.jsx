import UserProfile from './components/UserProfile'
import './App.css'
import profilePic from "./assets/miles_morales.png"; 

function App() {
  let name = "Miles Morales"
  let email = "therealestspiderman@gmail.com"
  let pic = profilePic;
  return (
    <main className='home-container'>
      <h1>I want pictures of Spiderman!</h1>
      <UserProfile name={name} email={email} pic={pic}/>
    </main>
  )
}

export default App
