import { useKeyboardMovement } from '../../hooks/useKeyboardMovement'
import { Character } from '../Character/Character'

export const Map = ({ character, setCharacter }: any) => {
  useKeyboardMovement(character.position, position =>
    setCharacter({ ...character, position })
  )

  return (
    <div className="map">
      <div
        className="map__character"
        style={{
          left: `${character.position.x}%`,
          top: `${character.position.y}%`,
        }}
      >
        <Character
          name={character.name}
          color={character.color}
        />
      </div>
    </div>
  )
}