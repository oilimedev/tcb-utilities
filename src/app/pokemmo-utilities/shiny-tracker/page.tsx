import styles from "../../page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>Shiny Tracker</h2>
        <h3>My Shinies</h3>
      <div>
        <div className="flex flex-wrap gap-4">
          <img src="https://img.pokemondb.net/sprites/black-white/shiny/pikachu-f.png"/>
          <img src="https://img.pokemondb.net/sprites/black-white/shiny/pikachu-f.png"/>
          <img src="https://img.pokemondb.net/sprites/black-white/shiny/pikachu-f.png"/>
          <img src="https://img.pokemondb.net/sprites/black-white/shiny/pikachu-f.png"/>
          <img src="https://img.pokemondb.net/sprites/black-white/shiny/pikachu-f.png"/>
          <img src="https://img.pokemondb.net/sprites/black-white/shiny/pikachu-f.png"/>
          <img src="https://img.pokemondb.net/sprites/black-white/shiny/pikachu-f.png"/>
          <img src="https://img.pokemondb.net/sprites/black-white/shiny/pikachu-f.png"/>
          <img src="https://img.pokemondb.net/sprites/black-white/shiny/pikachu-f.png"/>
          <img src="https://img.pokemondb.net/sprites/black-white/shiny/pikachu-f.png"/>
          <img src="https://img.pokemondb.net/sprites/black-white/shiny/pikachu-f.png"/>
          <img src="https://img.pokemondb.net/sprites/black-white/shiny/pikachu-f.png"/>
        </div>
        <button className="btn btn-primary mt-4">Add Shiny</button>
      </div>
    </div>
  );
}
