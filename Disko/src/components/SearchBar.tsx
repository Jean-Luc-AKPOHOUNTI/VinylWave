import { useState } from 'react'
import { searchArtists } from '../data/artists'
import { type Artist } from '../types'

interface SearchBarProps {
  onArtistSelect: (artistId: string) => void
}

export default function SearchBar({ onArtistSelect }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Artist[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleSearch = (value: string) => {
    setQuery(value)
    
    if (value.length < 2) {
      setShowResults(false)
      return
    }
    
    const filtered = searchArtists(value)
    setResults(filtered)
    setShowResults(true)
  }

  const handleResultClick = (artist: Artist) => {
    onArtistSelect(artist.id)
    setShowResults(false)
    setQuery('')
  }

  return (
    <div className="search-container">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Rechercher un artiste..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {showResults && (
        <div className="search-results" style={{ display: 'block' }}>
          {results.length === 0 ? (
            <div className="no-results">Aucun artiste trouvé</div>
          ) : (
            results.map((artist) => (
              <div 
                key={artist.id}
                className="search-result-item"
                onClick={() => handleResultClick(artist)}
              >
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="result-avatar"
                />
                <span className="result-name">{artist.name}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}