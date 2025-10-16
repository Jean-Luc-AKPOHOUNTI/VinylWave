import { useState } from 'react'
import { Shuffle, SkipBack, Play, Pause, SkipForward, Repeat, Heart, Plus, Search, Filter } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { artistsData } from '../data/artists'

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
    <section className="playlist-section">
      <div className="playlist-container">
        <div className="vinyl-player-section">                
          <div className="album-cover-main">
            {album ? (
              <img src={album.cover} alt={`${album.title} - ${artistName}`} />
            ) : (
              <div className="playlist-cover">
                <Play size={70} />
              </div>
            )}
          </div>
          
          <div className="audio-controls">
            <button className="control-btn shuffle-btn">
              <Shuffle className="control-icon" size={20} />
            </button>
            
            <button className="control-btn prev-btn" onClick={() => setCurrentTrack(Math.max(0, currentTrack - 1))}>
              <SkipBack className="control-icon" size={20} />
            </button>
            
            <button className="control-btn play-pause-btn" onClick={togglePlay}>
              {isPlaying ? <Pause className="control-icon" size={28} /> : <Play className="control-icon" size={28} />}
            </button>
            
            <button className="control-btn next-btn" onClick={() => setCurrentTrack(Math.min((album?.tracks?.length || allTracks.length) - 1, currentTrack + 1))}>
              <SkipForward className="control-icon" size={20} />
            </button>
            
            <button className="control-btn repeat-btn">
              <Repeat className="control-icon" size={20} />
            </button>
          </div>
          
          <div className="progress-container">
            <div className="progress-info">
              <span className="current-time">1:23</span>
              <span className="total-time">{(album?.tracks || allTracks)[currentTrack]?.duration || '0:00'}</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
        
        <div className="tracklist-section">
          <div className="tracklist-header">
            <div className="tracklist-title">{album ? album.title : 'Toutes les chansons'}</div>
            <div className="album-info">
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
            <div className="filters-section">
              <div className="search-bar">
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Rechercher une chanson ou un artiste..."
                  value={filters.searchQuery}
                  onChange={(e) => setFilters({...filters, searchQuery: e.target.value})}
                />
              </div>
              <div className="filter-controls">
                <select 
                  value={filters.selectedArtist} 
                  onChange={(e) => setFilters({...filters, selectedArtist: e.target.value})}
                >
                  <option value="all">Tous les artistes</option>
                  {uniqueArtists.map(artist => (
                    <option key={artist} value={artist}>{artist}</option>
                  ))}
                </select>
                <select 
                  value={filters.sortBy} 
                  onChange={(e) => setFilters({...filters, sortBy: e.target.value as 'name' | 'artist' | 'year'})}
                >
                  <option value="name">Trier par nom</option>
                  <option value="artist">Trier par artiste</option>
                  <option value="year">Trier par année</option>
                </select>
              </div>
            </div>
          )}
          
          <div className="tracks-container">
            {displayTracks.map((track, index) => (
              <div 
                key={index} 
                className={`track-item ${index === currentTrack ? 'active' : ''}`}
                onClick={() => selectTrack(index)}
              >
                <div className="track-number">{index + 1}</div>
                <div className="track-info">
                  <div className="track-title">{track.title}</div>
                  {!album && <div className="track-artist">{track.artist} • {track.album}</div>}
                </div>
                <div className="track-duration">{track.duration}</div>
                <div className="track-actions">
                  <button className="track-action-btn">
                    <Heart size={16} />
                  </button>
                  <button className="track-action-btn">
                    <Plus size={16} />
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