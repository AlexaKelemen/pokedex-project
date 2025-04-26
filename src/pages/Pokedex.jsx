import { useEffect, useState } from "react"
import PokemonCard from "../components/PokemonCard"
import axios from "axios"

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState([])
  const [page, setPage] = useState(0)
  const limit = 20

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${page * limit}`)

        const promises = response.data.results.map((pokemon) =>
          axios.get(pokemon.url)
        )

        const results = await Promise.all(promises)

        const formatted = results.map((res) => ({
          id: res.data.id,
          name: capitalize(res.data.name),
          image: res.data.sprites.front_default,
          type: res.data.types[0].type.name,  
        }))

        setPokemonList(formatted)
      } catch (err) {
        console.error("Failed to load Pokémon:", err)
        setPokemonList([])
      }
    }

    fetchPokemons()
  }, [page])

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  function handleNext() {
    setPage((prevPage) => prevPage + 1)
  }

  function handlePrev() {
    if (page > 0) setPage((prevPage) => prevPage - 1)
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>Pokédex</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "1.5rem",
        marginTop: "2rem"
      }}>
        {pokemonList.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <button onClick={handlePrev} disabled={page === 0} style={{ marginRight: "1rem" }}>
          Previous
        </button>
        <button onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  )
}
