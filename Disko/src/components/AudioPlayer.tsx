import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Heart, Plus } from 'lucide-react'
import { useAudio } from '../hooks/useAudio'
import { motion } from 'framer-motion'
import ResponsiveImage from './ResponsiveImage'

export default function AudioPlayer() {
  const { audioState, togglePlay } = useAudio()

  const tracks = [
    { title: "Reine", artist: "Dadju", duration: "3:28", albumCover: "images/albums/gentleman-20.jpg" },
    { title: "Jaloux", artist: "Dadju", duration: "3:15", albumCover: "images/albums/gentleman-20.jpg" },
    { title: "Bob Marley", artist: "Dadju", duration: "3:42", albumCover: "images/albums/gentleman-20.jpg" },
    { title: "Compliqué", artist: "Dadju", duration: "3:33", albumCover: "images/albums/gentleman-20.jpg" }
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Vinyl Player Section */}
      <div className="text-center">
        <motion.div 
          className="w-80 h-80 mx-auto mb-6 rounded-lg overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          <ResponsiveImage 
            src="/images/albums/gentleman-20.jpg" 
            alt="Gentleman 2.0 - Dadju"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Audio Controls */}
        <div className="flex justify-center items-center space-x-4 mb-6">
          <button className="p-2 rounded-full transition-colors hover:bg-white/10">
            <Shuffle size={20} />
          </button>
          
          <button className="p-2 rounded-full transition-colors hover:bg-white/10">
            <SkipBack size={20} />
          </button>
          
          <motion.button 
            onClick={togglePlay}
            className="p-4 rounded-full transition-colors"
            style={{ background: 'linear-gradient(135deg, #ff6b35, #f7931e)' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {audioState.isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </motion.button>
          
          <button className="p-2 rounded-full transition-colors hover:bg-white/10">
            <SkipForward size={20} />
          </button>
          
          <button className="p-2 rounded-full transition-colors hover:bg-white/10">
            <Repeat size={20} />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-white/60">
            <span>1:23</span>
            <span>3:28</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1">
            <motion.div 
              className="h-1 rounded-full"
              style={{ 
                width: '40%',
                background: 'linear-gradient(90deg, #ff6b35, #f7931e)'
              }}
              initial={{ width: 0 }}
              animate={{ width: '40%' }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
      
      {/* Tracklist Section */}
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Gentleman 2.0</h2>
          <div className="text-white/70">
            <div>Dadju • 2017</div>
            <div>4 pistes • 14 min</div>
          </div>
        </div>
        
        <div className="space-y-2">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer"
              style={{ background: index === 0 ? '#333' : '#2a2a2a' }}
              whileHover={{ backgroundColor: '#333' }}
            >
              <div className="flex items-center space-x-4">
                <span className="w-6 text-white/60">{index + 1}</span>
                <div>
                  <div className="font-medium">{track.title}</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-white/60">{track.duration}</span>
                <div className="flex space-x-2">
                  <button className="p-1 rounded hover:bg-white/10">
                    <Heart size={16} />
                  </button>
                  <button className="p-1 rounded hover:bg-white/10">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}