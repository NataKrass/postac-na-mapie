import { useEffect } from 'react'
import type { Position } from '../types/character'

export const useKeyboardMovement = ( position: Position, 
  onMove: (position: Position) => void ) => {
  useEffect(() => {
    const STEP = 4
    const MIN = 0
    const MAX = 98 

    const clamp = (value: number) => Math.min(MAX, Math.max(MIN, value))

    const handleKeyDown = (e: KeyboardEvent) => {
      let { x, y } = position

      switch (e.key) {
        case 'ArrowUp':
          y -= STEP
          e.preventDefault()
          break
        case 'ArrowDown':
          y += STEP
          e.preventDefault()
          break
        case 'ArrowLeft':
          x -= STEP
          e.preventDefault()
          break
        case 'ArrowRight':
          x += STEP
          e.preventDefault()
          break
        default:
          return
      }
      onMove({ x: clamp(x), y: clamp(y) })
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [position, onMove])
}
