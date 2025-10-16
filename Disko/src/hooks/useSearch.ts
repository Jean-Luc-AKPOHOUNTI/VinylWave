import { useState, useMemo } from 'react'
import { searchArtists } from '../data/artists'
// import { type Artist } from '../types'

export function useSearch() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (!query.trim()) return []
    return searchArtists(query)
  }, [query])

  return {
    query,
    setQuery,
    results,
    hasResults: results.length > 0
  }
}