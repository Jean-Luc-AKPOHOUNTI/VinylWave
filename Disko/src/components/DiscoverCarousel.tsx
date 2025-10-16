import { useState, useEffect, useRef, useCallback } from 'react'
import { getArtistsByPopularity } from '../data/artists'
import SearchBar from './SearchBar'
import ArtistModal from './ArtistModal'
import { type Artist } from '../types'

export default function DiscoverCarousel() {
  const [artists] = useState(getArtistsByPopularity())
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const radius = 700

  const next = () => {
    if (isAnimating) return
    setCurrentIndex(prev => (prev + 1) % artists.length)
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 800)
  }

  const previous = () => {
    if (isAnimating) return
    setCurrentIndex(prev => (prev - 1 + artists.length) % artists.length)
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 800)
  }

  const goToArtist = useCallback((artistId: string) => {
    const index = artists.findIndex(artist => artist.id === artistId)
    if (index !== -1 && index !== currentIndex) {
      setCurrentIndex(index)
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 800)
    }
  }, [artists, currentIndex, isAnimating])

  const openArtistModal = (artist: Artist) => {
    setSelectedArtist(artist)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedArtist(null)
  }

  const handleCardClick = (index: number) => {
    if (index === currentIndex) {
      openArtistModal(artists[index])
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isAnimating) return
      
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault()
          previous()
          break
        case 'ArrowRight':
          event.preventDefault()
          next()
          break
        case 'Enter':
          event.preventDefault()
          openArtistModal(artists[currentIndex])
          break
        case 'Escape':
          event.preventDefault()
          console.log('Quitter section')
          break
      }
    }

    const handleWheel = (event: WheelEvent) => {
      if (isAnimating) return
      
      event.preventDefault()
      
      if (event.deltaY > 0) {
        next()
      } else {
        previous()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [isAnimating, artists.length, currentIndex])

  

  // Rotation du carousel entier
  const rotationAngle = -(currentIndex / artists.length) * 360

  return (
    <>
      <SearchBar onArtistSelect={goToArtist} />
      <div className="carousel-container">
        <div 
          ref={carouselRef}
          className="carousel-3d"
          style={{
            transform: `rotateY(${rotationAngle}deg)`,
            transition: isAnimating ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
          }}
        >
          <div className="carousel-cards">
            {artists.map((artist, index) => {
              const angle = (index / artists.length) * 360
              return (
                <div
                  key={artist.id}
                  className={`artist-card ${index === currentIndex ? 'active' : ''}`}
                  data-index={index}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="artist-image"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = generatePlaceholder(artist.name)
                    }}
                  />
                  <div className="play-overlay">
                    <div className="play-button">
                      <svg className="play-svg" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
      <div className="artist-info-display">
        <h2 className="current-artist-name">{artists[currentIndex]?.name}</h2>
      </div>
      
      <ArtistModal 
        artist={selectedArtist}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  )
}

function generatePlaceholder(artistName: string): string {
  const canvas = document.createElement('canvas')
  canvas.width = 300
  canvas.height = 300
  const ctx = canvas.getContext('2d')
  
  if (!ctx) return ''
  
  const gradient = ctx.createLinearGradient(0, 0, 300, 300)
  gradient.addColorStop(0, '#ff6b35')
  gradient.addColorStop(1, '#f7931e')
  
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 300, 300)
  
  const initials = artistName.split(' ').map(word => word[0]).join('').toUpperCase()
  ctx.fillStyle = 'white'
  ctx.font = 'bold 80px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(initials, 150, 150)
  
  return canvas.toDataURL()
}