import './App.css'
import RecipeGallery from './components/RecipeGallery.jsx'

function App() {

  return (
    <div className="wrapper">
      <header>
        <h1 className="heading">Recipes 📝</h1>
      </header>
      <main>
        <RecipeGallery />
      </main>
      <footer>
        <p>🙏 thanks for visiting! 🙏</p>
      </footer>
    </div>
  )
}

export default App;
