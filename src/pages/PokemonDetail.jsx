import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function PokemonDetail() {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        setPokemon(response.data)
      } catch (error) {
        console.error("Error fetching Pokémon:", error)
      }
    }

    fetchPokemon()
  }, [name])

  if (!pokemon) {
    return <div style={{ color: "white", padding: "2rem" }}>Loading...</div>
  }

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h1>{pokemon.name.toUpperCase()}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />

      <h2>Type(s)</h2>
      <p>{pokemon.types.map(t => t.type.name).join(" / ")}</p>

      <h2>Abilities</h2>
      <ul>
        {pokemon.abilities.map((a) => (
          <li key={a.ability.name}>{a.ability.name}</li>
        ))}
      </ul>

      <h2>Stats</h2>
      <ul>
        {pokemon.stats.map((s) => (
          <li key={s.stat.name}>
            {s.stat.name}: {s.base_stat}
          </li>
        ))}
      </ul>

      <h2>Height and Weight</h2>
      <p>Height: {pokemon.height} dm</p>
      <p>Weight: {pokemon.weight} hg</p>
    </div>
  )
}
