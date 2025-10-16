import { useState, useCallback } from 'react'
import { type AudioState, type PlaylistTrack } from '../types'

export function useAudio() {
  const [audioState, setAudioState] = useState<AudioState>({
    isPlaying: false,
    currentTrack: null,
    currentTime: 0,
    duration: 0,
    volume: 1
  })

  const play = useCallback((track?: PlaylistTrack) => {
    setAudioState(prev => ({
      ...prev,
      isPlaying: true,
      currentTrack: track || prev.currentTrack
    }))
  }, [])

  const pause = useCallback(() => {
    setAudioState(prev => ({ ...prev, isPlaying: false }))
  }, [])

  const togglePlay = useCallback(() => {
    setAudioState(prev => ({ ...prev, isPlaying: !prev.isPlaying }))
  }, [])

  const setCurrentTime = useCallback((time: number) => {
    setAudioState(prev => ({ ...prev, currentTime: time }))
  }, [])

  const setVolume = useCallback((volume: number) => {
    setAudioState(prev => ({ ...prev, volume }))
  }, [])

  return {
    audioState,
    play,
    pause,
    togglePlay,
    setCurrentTime,
    setVolume
  }
}