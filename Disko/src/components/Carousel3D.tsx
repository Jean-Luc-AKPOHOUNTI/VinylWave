import { motion } from 'framer-motion'
import { useCarousel } from '../hooks/useCarousel'
import { getArtistsByPopularity } from '../data/artists'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ResponsiveImage from './ResponsiveImage'

export default function Carousel3D() {
  const artists = getArtistsByPopularity()
  const { currentIndex, currentItem, goToNext, goToPrevious, goToIndex } = useCarousel({ items: artists })

  return (
    <div className="relative w-full h-96 perspective-1000">
      <div className="relative w-full h-full flex items-center justify-center">
        {artists.map((artist, index) => {
          const offset = index - currentIndex
          const isActive = index === currentIndex
          
          return (
            <motion.div
              key={artist.id}
              className="absolute cursor-pointer"
              animate={{
                x: offset * 200,
                z: isActive ? 0 : -200,
                rotateY: offset * 25,
                scale: isActive ? 1 : 0.8,
                opacity: Math.abs(offset) > 2 ? 0 : 1
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              onClick={() => goToIndex(index)}
              whileHover={{ scale: isActive ? 1.05 : 0.85 }}
            >
              <div className="w-48 h-64 rounded-lg overflow-hidden shadow-2xl" style={{
                background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)'
              }}>
                <ResponsiveImage 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{artist.name}</h3>
                  <p className="text-white/60 text-sm">{artist.albums.length} album(s)</p>
                  <div className="mt-2 w-full bg-gray-700 rounded-full h-1">
                    <div 
                      className="h-1 rounded-full"
                      style={{ 
                        width: `${artist.popularity}%`,
                        background: 'linear-gradient(90deg, #ff6b35, #f7931e)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors z-10"
        style={{ background: 'rgba(255, 107, 53, 0.2)' }}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors z-10"
        style={{ background: 'rgba(255, 107, 53, 0.2)' }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Current Artist Info */}
      {currentItem && (
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center"
        >
          <h2 className="text-2xl font-bold mb-2">{currentItem.name}</h2>
          <p className="text-white/70">Popularité: {currentItem.popularity}%</p>
        </motion.div>
      )}
    </div>
  )
}