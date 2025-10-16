import { motion } from 'framer-motion'

interface VinylPlayerProps {
  isPlaying?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function VinylPlayer({ isPlaying = true, size = 'lg' }: VinylPlayerProps) {
  const sizeClasses = {
    sm: 'w-32 h-32 xs:w-40 xs:h-40',
    md: 'w-48 h-48 sm:w-64 sm:h-64', 
    lg: 'w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96'
  }

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      {/* Turntable Base */}
      <div className="absolute w-full h-full rounded-full" style={{
        background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), inset 0 5px 15px rgba(255, 255, 255, 0.1)'
      }} />
      
      {/* Vinyl Record */}
      <motion.div 
        className="absolute top-8 left-8 rounded-full"
        style={{
          width: 'calc(100% - 4rem)',
          height: 'calc(100% - 4rem)',
          background: 'radial-gradient(circle, #1a1a1a 15%, #333 16%, #1a1a1a 17%, #333 30%, #1a1a1a 31%, #222 100%)',
          boxShadow: '0 0 30px rgba(255, 107, 53, 0.3)'
        }}
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ 
          duration: 3, 
          repeat: isPlaying ? Infinity : 0, 
          ease: "linear" 
        }}
      >
        {/* Center Label */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full" style={{
          background: 'linear-gradient(45deg, #ff6b35, #f7931e)',
          boxShadow: '0 0 20px rgba(255, 107, 53, 0.5)'
        }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full" />
        </div>
      </motion.div>

      {/* Tonearm */}
      <motion.div 
        className="absolute top-16 right-12 w-24 h-1 rounded-sm origin-right"
        style={{
          background: 'linear-gradient(90deg, #666, #999, #666)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
        }}
        animate={{ rotate: isPlaying ? -5 : -20 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full" style={{
          background: 'radial-gradient(circle, #ff6b35, #f7931e)',
          boxShadow: '0 0 15px rgba(255, 107, 53, 0.6)'
        }} />
      </motion.div>

      {/* Sound Waves */}
      {isPlaying && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          {[0, 0.5, 1].map((delay, i) => (
            <motion.div
              key={i}
              className="absolute border-2 rounded-full"
              style={{
                borderColor: 'rgba(255, 107, 53, 0.3)',
                width: `${100 + i * 20}%`,
                height: `${100 + i * 20}%`,
                top: `${-10 * i}%`,
                left: `${-10 * i}%`
              }}
              animate={{
                scale: [0.8, 1.2],
                opacity: [0.8, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}