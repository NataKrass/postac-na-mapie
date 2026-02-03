import { useColorName } from '../../hooks/useColorName'

export const CharacterForm = ({ character, setCharacter }: any) => {
  const { colorName, error } = useColorName(character.color)

  return (
    <div className="character-form">
      <input
        className="character-form__input"
        type="text"
        placeholder="Character name"
        value={character.name}
        onChange={e =>
          setCharacter({ ...character, name: e.target.value })
        }
      />
      <div className="character-form__color-row">
        <input
          className="character-form__color-input"
          type="color"
          value={character.color}
          onChange={e =>
            setCharacter({ ...character, color: e.target.value })
          }
        />
        {colorName && (
          <p className="character-form__color-name">
            {colorName}
          </p>
        )}
      </div>
      {error && (
        <p className="character-form__error">
          {error}
        </p>
      )}
    </div>
  )
}