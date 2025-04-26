import { Routes,Route,Link } from "react-router-dom"
import Pokedex from "./pages/Pokedex"
import About from './pages/About'
import PokemonDetail from './pages/PokemonDetail'

export default function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', background: '#222' }}>
        <Link to="/pokedex" style={{ marginRight: '1rem', color: 'white' }}>Pokedex</Link>
        <Link to="/about" style={{ color: 'white' }}>About</Link>
      </nav>

      <Routes>
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:name" element={<PokemonDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}