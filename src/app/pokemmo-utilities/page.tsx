import styles from "../page.module.css";

export default function Home() {
  return <div className={styles.page}><h2>PokeMMO Utilities</h2>
  <ul>
    <li><a href="/pokemmo-utilities/shiny-tracker">Shiny Tracker</a></li>
    <li><a href="/pokemmo-utilities/shiny-showcase">Shiny Showcase</a></li>
  </ul>
  </div>;
}
