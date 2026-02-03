import { useState } from 'react'
import type { Character } from '../types/character'

export const useCharacter = () => {
  const [character, setCharacter] = useState<Character>({
    name: '',
    color: '#0a0e27',
    position: { x: 5, y: 5 }
  })

  return { character, setCharacter }
}