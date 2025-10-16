export interface Track {
  title: string
  duration: string
}

export interface Album {
  id: string
  title: string
  year: number
  cover: string
  tracks: Track[]
}

export interface Artist {
  id: string
  name: string
  image: string
  popularity: number
  albums: Album[]
}

export interface PlaylistTrack extends Track {
  artist: string
  album: string
  albumCover: string
}

export interface AudioState {
  isPlaying: boolean
  currentTrack: PlaylistTrack | null
  currentTime: number
  duration: number
  volume: number
}

export interface SearchResult {
  artists: Artist[]
  query: string
}