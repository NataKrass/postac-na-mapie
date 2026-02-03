import { useEffect, useState } from 'react'
import { fetchColorName } from '../api/colorApi'

export const useColorName = (color: string) => {
  const [colorName, setColorName] = useState('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!color) return

    fetchColorName(color)
      .then(setColorName)
      .catch(() => setError('Unable to load color name'))
  }, [color])

  return { colorName, error }
}