import { useState, useCallback, useEffect } from 'react'
import { type Artist } from '../types'

interface UseCarouselProps {
  items: Artist[]
}

export function useCarousel({ items }: UseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % items.length)
  }, [items.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length)
  }, [items.length])

  const goToIndex = useCallback((index: number) => {
    if (index >= 0 && index < items.length) {
      setCurrentIndex(index)
    }
  }, [items.length])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          goToPrevious()
          break
        case 'ArrowRight':
          event.preventDefault()
          goToNext()
          break
        case 'Enter':
          event.preventDefault()
          // Action à définir selon le contexte
          break
        case 'Escape':
          event.preventDefault()
          // Action à définir selon le contexte
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrevious])

  return {
    currentIndex,
    currentItem: items[currentIndex],
    goToNext,
    goToPrevious,
    goToIndex,
    hasNext: currentIndex < items.length - 1,
    hasPrevious: currentIndex > 0
  }
}