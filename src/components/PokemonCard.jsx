import { Link } from "react-router-dom"

export default function PokemonCard({ pokemon }) {
  const typeColors = {
    grass: "#66cc66",
    fire: "#ff9933",
    water: "#66b3ff",
    bug: "#99cc66",
    normal: "#cccccc",
    poison: "#aa66cc",
    electric: "#ffdb4d",
    ground: "#d2b48c",
    fairy: "#f0b6f7",
    fighting: "#d67873",
    psychic: "#f85888",
    rock: "#b8a038",
    ghost: "#705898",
    ice: "#98d8d8",
    dragon: "#7038f8",
    dark: "#705848",
    steel: "#b8b8d0",
    flying: "#a890f0"
  }

  const bgColor = typeColors[pokemon.type] || "#444" 

  return (
    <Link to={`/pokedex/${pokemon.name}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          backgroundColor: bgColor,
          color: "white",
          padding: "1rem",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          transition: "transform 0.2s",
        }}
      >
        <div>#{pokemon.id}</div>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{pokemon.name}</div>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          style={{ width: "80px", height: "80px", marginTop: "0.5rem" }}
        />
      </div>
    </Link>
  )
}
