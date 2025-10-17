import { useState } from 'react'
import { Shuffle, SkipBack, Play, Pause, SkipForward, Repeat, Heart, Plus, Search, Filter } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { artistsData } from '../data/artists'
import { CustomSelect } from '../components/CustomSelect'

interface Track {
  title: string
  duration: string
  artist?: string
  album?: string
  year?: number
  cover?: string
}

interface Album {
  id: string
  title: string
  year: number
  cover: string
  tracks: Track[]
}

interface AlbumData {
  album: Album
  artist: string
}

interface AllTracksView {
  searchQuery: string
  selectedGenre: string
  selectedArtist: string
  sortBy: 'name' | 'artist' | 'year'
}

export default function Playlists() {
  const location = useLocation()
  const albumData = location.state as AlbumData | null
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(40)
  const [filters, setFilters] = useState<AllTracksView>({
    searchQuery: '',
    selectedGenre: 'all',
    selectedArtist: 'all',
    sortBy: 'name'
  })

  // Générer toutes les chansons de tous les artistes
  const getAllTracks = (): Track[] => {
    const allTracks: Track[] = []
    Object.values(artistsData).forEach(artist => {
      artist.albums.forEach(album => {
        album.tracks.forEach(track => {
          allTracks.push({
            ...track,
            artist: artist.name,
            album: album.title,
            year: album.year,
            cover: album.cover
          })
        })
      })
    })
    return allTracks
  }

  const allTracks = getAllTracks()
  const album = albumData?.album
  const artistName = albumData?.artist

  const getTotalDuration = () => {
    if (album && album.tracks) {
      const totalMinutes = album.tracks.length * 3.5
      return `${Math.round(totalMinutes)} min`
    }
    return `${allTracks.length} chansons`
  }

  // Filtrer les chansons
  const filteredTracks = allTracks.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      track.artist!.toLowerCase().includes(filters.searchQuery.toLowerCase())
    const matchesArtist = filters.selectedArtist === 'all' || track.artist === filters.selectedArtist
    return matchesSearch && matchesArtist
  }).sort((a, b) => {
    switch (filters.sortBy) {
      case 'artist': return a.artist!.localeCompare(b.artist!)
      case 'year': return (b.year || 0) - (a.year || 0)
      default: return a.title.localeCompare(b.title)
    }
  })

  const displayTracks = (album && album.tracks) ? album.tracks : filteredTracks
  const uniqueArtists = [...new Set(allTracks.map(track => track.artist))]

  const togglePlay = () => setIsPlaying(!isPlaying)
  const selectTrack = (index: number) => setCurrentTrack(index)
  return (
    <section className="h-screen bg-black relative flex items-center justify-center p-16 overflow-hidden">
      {/* Couche d'étoiles fixes */}
      <div className="absolute inset-0 z-0 stars-layer"></div>
      {/* Couche d'étoiles scintillantes */}
      <div className="absolute inset-0 z-0 twinkling-layer"></div>

      <div className="max-w-7xl w-full h-5/6 grid grid-cols-1 lg:grid-cols-2 gap-0 mt-24 items-stretch relative z-10">
        <div className="flex flex-col items-center justify-center relative p-8">
          <div className="w-80 h-80 lg:w-96 lg:h-96 my-8 rounded-3xl overflow-hidden shadow-2xl border border-orange-500/20 transition-all duration-300 hover:scale-105 hover:shadow-orange-500/20">
            {album ? (
              <img src={album.cover} alt={`${album.title} - ${artistName}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex flex-col items-center justify-center border-2 border-orange-500/30 rounded-3xl">
                <Play size={70} className="text-orange-500 mb-4" />
                <h3 className="text-white text-xl font-semibold text-center">Toutes les chansons</h3>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-6">
            <button className="bg-white/10 border-2 border-orange-500/30 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm hover:border-orange-500 hover:bg-orange-500/20 hover:scale-110">
              <Shuffle size={20} className="text-white" />
            </button>

            <button className="bg-white/10 border-2 border-orange-500/30 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm hover:border-orange-500 hover:bg-orange-500/20 hover:scale-110" onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}>
              <SkipBack size={20} className="text-white" />
            </button>

            <button className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg shadow-orange-500/40 hover:scale-110 hover:shadow-orange-500/60" onClick={togglePlay}>
              {isPlaying ? <Pause size={28} className="text-white" /> : <Play size={28} className="text-white" />}
            </button>

            <button className="bg-white/10 border-2 border-orange-500/30 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm hover:border-orange-500 hover:bg-orange-500/20 hover:scale-110" onClick={() => setCurrentTrack(Math.min((album?.tracks?.length || allTracks.length) - 1, currentTrack + 1))}>
              <SkipForward size={20} className="text-white" />
            </button>

            <button className="bg-white/10 border-2 border-orange-500/30 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm hover:border-orange-500 hover:bg-orange-500/20 hover:scale-110">
              <Repeat size={20} className="text-white" />
            </button>
          </div>

          <div className="w-full my-6">
            <div className="flex justify-between mb-2 text-sm text-white/70">
              <span>1:23</span>
              <span>{(album?.tracks || allTracks)[currentTrack]?.duration || '0:00'}</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer relative">
              <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-100 relative" style={{ width: `${progress}%` }}>
                <div className="absolute -right-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md shadow-orange-500/50"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-transparent p-8 h-full overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-8 pb-4">
            <div className="font-bebas text-3xl text-white tracking-wider">{album ? album.title : 'Toutes les chansons'}</div>
            <div className="text-right text-sm text-white/70">
              {album && album.tracks ? (
                <>
                  <div>{artistName} • {album.year}</div>
                  <div>{album.tracks.length} pistes • {getTotalDuration()}</div>
                </>
              ) : (
                <>
                  <div>Bibliothèque musicale</div>
                  <div>{getTotalDuration()}</div>
                </>
              )}
            </div>
          </div>

          {!album && (
            <div className="py-4 border-b border-white/10 mb-4">
              <div className="relative mb-4">
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 z-10" />
                <input
                  type="text"
                  className="w-full py-3 pl-12 pr-4 bg-white/5 border-2 border-white/10 rounded-full text-white text-sm outline-none transition-all duration-300 focus:border-orange-500/50 focus:bg-white/8"
                  placeholder="Rechercher une chanson ou un artiste..."
                  value={filters.searchQuery}
                  onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-4">
                <CustomSelect
                  options={[
                    { value: 'all', label: 'Tous les artistes' },
                    ...uniqueArtists.map(artist => ({ value: artist!, label: artist! }))
                  ]}
                  value={filters.selectedArtist}
                  onChange={(value) => setFilters({ ...filters, selectedArtist: value })}
                  className="min-w-40"
                />
                <CustomSelect
                  options={[
                    { value: 'name', label: 'Trier par nom' },
                    { value: 'artist', label: 'Trier par artiste' },
                    { value: 'year', label: 'Trier par année' }
                  ]}
                  value={filters.sortBy}
                  onChange={(value) => setFilters({ ...filters, sortBy: value as 'name' | 'artist' | 'year' })}
                  className="min-w-40"
                />
              </div>
            </div>
          )}

          <div className="flex-1 overflow-y-auto pr-2 tracks-scroll">
            {displayTracks.map((track, index) => (
              <div
                key={index}
                className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 mb-2 relative group hover:bg-orange-500/10 hover:translate-x-1 ${index === currentTrack ? 'bg-orange-500/20 border-l-4 border-orange-500' : ''
                  }`}
                onClick={() => selectTrack(index)}
              >
                <div className={`w-8 text-center font-semibold text-sm ${index === currentTrack ? 'text-orange-500' : 'text-white/50'
                  }`}>{index + 1}</div>
                <div className="flex-1 ml-4">
                  <div className="text-white font-medium mb-1">{track.title}</div>
                  {!album && <div className="text-white/60 text-sm">{track.artist} • {track.album}</div>}
                </div>
                <div className="text-white/50 text-sm min-w-12 text-right">{track.duration}</div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-4">
                  <button className="p-1 rounded-full transition-all duration-200 hover:text-orange-500 hover:bg-orange-500/10">
                    <Heart size={16} className="text-white/60" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}