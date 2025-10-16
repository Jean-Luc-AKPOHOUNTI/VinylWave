import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { type Artist } from '../types'

interface ArtistModalProps {
  artist: Artist | null
  isOpen: boolean
  onClose: () => void
}

export default function ArtistModal({ artist, isOpen, onClose }: ArtistModalProps) {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const albumsPerPage = 10

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen || !artist) return null

  const filteredAlbums = artist.albums.filter(album =>
    album.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalPages = Math.ceil(filteredAlbums.length / albumsPerPage)
  const startIndex = (currentPage - 1) * albumsPerPage
  const currentAlbums = filteredAlbums.slice(startIndex, startIndex + albumsPerPage)

  const handleAlbumClick = (album: any) => {
    navigate('/playlists', {
      state: {
        album: album,
        artist: artist?.name
      }
    })
    onClose()
  }

  return (
    <div className={`artist-modal ${isOpen ? 'active' : ''}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <div className="artist-info">
            <img 
              src={artist.image} 
              alt={artist.name}
              className="artist-avatar"
            />
            <div className="artist-details">
              <h2>{artist.name}</h2>
              <p>{artist.albums.length} album(s)</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-search">
          <input
            type="text"
            className="album-search"
            placeholder="Rechercher un album..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="albums-grid">
          {currentAlbums.length === 0 ? (
            <div className="no-albums">Aucun album disponible</div>
          ) : (
            currentAlbums.map((album) => (
              <div
                key={album.id}
                className="album-card"
                onClick={() => handleAlbumClick(album)}
              >
                <div className="album-cover">
                  <img src={album.cover} alt={album.title} />
                  <div className="play-overlay">
                    <div className="play-btn">▶</div>
                  </div>
                </div>
                <div className="album-info">
                  <h3>{album.title}</h3>
                  <div className="album-details">
                    <span className="album-year">{album.year}</span>
                    <span className="track-count">{album.tracks.length} titres</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {totalPages > 1 && (
          <div className="modal-pagination">
            <button
              className="pagination-btn"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => prev - 1)}
            >
              ‹
            </button>
            <span className="page-info">{currentPage} / {totalPages}</span>
            <button
              className="pagination-btn"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(prev => prev + 1)}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  )
}