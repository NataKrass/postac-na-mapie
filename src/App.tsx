import { useCharacter } from './hooks/useCharacter'
import { CharacterForm } from './components/CharacterForm/CharacterForm'
import { Map } from './components/Map/Map'

export default function App() {
  const { character, setCharacter } = useCharacter()

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Postać na Mapie</h1>
        <p className="app-subtitle">
          Stwórz swoją postać i poruszaj się po mapie
        </p>
      </header>

      <main className="app-main">
        <aside className="sidebar">
          <CharacterForm character={character} setCharacter={setCharacter} />
        </aside>

        <section className="map-section">
          <Map character={character} setCharacter={setCharacter} />
        </section>
      </main>
    </div>

  )
}