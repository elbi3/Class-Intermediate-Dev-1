import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from "./components/ProductList.jsx";

function App() {

  return (
    <>
      <div>
        <h1>Craigslist</h1>
        <ProductList />
      </div>
    </>
  )
}

export default App
