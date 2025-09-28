// Gestionnaire de playlist pour la section playlists
class PlaylistManager {
    constructor() {
        this.currentAlbum = null;
        this.currentArtist = null;
        this.currentTrack = 0;
        this.isPlaying = false;
        this.audio = new Audio();
        
        this.setupAudioEvents();
    }
    
    loadAlbum(album, artist) {
        this.currentAlbum = album;
        this.currentArtist = artist;
        this.currentTrack = 0;
        
        this.renderPlaylist();
        this.updatePlayerInterface();
    }
    
    renderPlaylist() {
        const container = document.querySelector('.player-interface');
        if (!container) return;
        
        container.innerHTML = `
            <div class="playlist-header">
                <div class="album-info">
                    <img src="${this.currentAlbum.cover}" alt="${this.currentAlbum.title}" class="album-cover-large">
                    <div class="album-details">
                        <h2>${this.currentAlbum.title}</h2>
                        <h3>${this.currentArtist.name}</h3>
                        <p>${this.currentAlbum.year} • ${this.currentAlbum.tracks?.length || 0} titres</p>
                    </div>
                </div>
                <div class="playlist-controls">
                    <button class="play-all-btn">
                        <span class="play-icon">▶</span>
                        Tout lire
                    </button>
                </div>
            </div>
            
            <div class="track-list">
                ${this.renderTracks()}
            </div>
            
            <div class="audio-player">
                <div class="player-controls">
                    <button class="prev-btn">⏮</button>
                    <button class="play-pause-btn">▶</button>
                    <button class="next-btn">⏭</button>
                </div>
                <div class="track-info">
                    <div class="track-title">Sélectionnez un titre</div>
                    <div class="track-artist">${this.currentArtist.name}</div>
                </div>
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress-fill"></div>
                    </div>
                    <div class="time-display">
                        <span class="current-time">0:00</span>
                        <span class="total-time">0:00</span>
                    </div>
                </div>
            </div>
        `;
        
        this.setupPlaylistEvents();
    }
    
    renderTracks() {
        if (!this.currentAlbum.tracks) return '<div class="no-tracks">Aucun titre disponible</div>';
        
        return this.currentAlbum.tracks.map((track, index) => `
            <div class="track-item ${index === this.currentTrack ? 'active' : ''}" data-track-index="${index}">
                <div class="track-number">${index + 1}</div>
                <div class="track-details">
                    <div class="track-name">${track.title}</div>
                    <div class="track-duration">${track.duration}</div>
                </div>
                <div class="track-actions">
                    <button class="play-track-btn">▶</button>
                </div>
            </div>
        `).join('');
    }
    
    setupPlaylistEvents() {
        // Play all button
        const playAllBtn = document.querySelector('.play-all-btn');
        playAllBtn?.addEventListener('click', () => {
            this.playTrack(0);
        });
        
        // Track items
        document.querySelectorAll('.track-item').forEach(item => {
            item.addEventListener('click', () => {
                const trackIndex = parseInt(item.dataset.trackIndex);
                this.playTrack(trackIndex);
            });
        });
        
        // Player controls
        const playPauseBtn = document.querySelector('.play-pause-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        playPauseBtn?.addEventListener('click', () => this.togglePlayPause());
        prevBtn?.addEventListener('click', () => this.previousTrack());
        nextBtn?.addEventListener('click', () => this.nextTrack());
    }
    
    setupAudioEvents() {
        this.audio.addEventListener('loadedmetadata', () => {
            this.updateDuration();
        });
        
        this.audio.addEventListener('timeupdate', () => {
            this.updateProgress();
        });
        
        this.audio.addEventListener('ended', () => {
            this.nextTrack();
        });
        
        this.audio.addEventListener('play', () => {
            this.isPlaying = true;
            this.updatePlayButton();
        });
        
        this.audio.addEventListener('pause', () => {
            this.isPlaying = false;
            this.updatePlayButton();
        });
    }
    
    playTrack(index) {\n        if (!this.currentAlbum.tracks || index >= this.currentAlbum.tracks.length) return;\n        \n        this.currentTrack = index;\n        const track = this.currentAlbum.tracks[index];\n        \n        // Simulation du chargement audio (remplacer par vrais fichiers)\n        // this.audio.src = `audio/${this.currentArtist.id}/${this.currentAlbum.id}/${track.id}.mp3`;\n        \n        this.updateTrackInfo(track);\n        this.updateActiveTrack();\n        \n        // Simulation de lecture\n        this.isPlaying = true;\n        this.updatePlayButton();\n        \n        console.log(`Playing: ${track.title} by ${this.currentArtist.name}`);\n    }\n    \n    togglePlayPause() {\n        if (this.isPlaying) {\n            this.audio.pause();\n        } else {\n            this.audio.play();\n        }\n    }\n    \n    nextTrack() {\n        const nextIndex = (this.currentTrack + 1) % this.currentAlbum.tracks.length;\n        this.playTrack(nextIndex);\n    }\n    \n    previousTrack() {\n        const prevIndex = (this.currentTrack - 1 + this.currentAlbum.tracks.length) % this.currentAlbum.tracks.length;\n        this.playTrack(prevIndex);\n    }\n    \n    updateTrackInfo(track) {\n        const titleEl = document.querySelector('.track-title');\n        const artistEl = document.querySelector('.track-artist');\n        \n        if (titleEl) titleEl.textContent = track.title;\n        if (artistEl) artistEl.textContent = this.currentArtist.name;\n    }\n    \n    updateActiveTrack() {\n        document.querySelectorAll('.track-item').forEach((item, index) => {\n            item.classList.toggle('active', index === this.currentTrack);\n        });\n    }\n    \n    updatePlayButton() {\n        const playPauseBtn = document.querySelector('.play-pause-btn');\n        if (playPauseBtn) {\n            playPauseBtn.textContent = this.isPlaying ? '⏸' : '▶';\n        }\n    }\n    \n    updateDuration() {\n        const totalTimeEl = document.querySelector('.total-time');\n        if (totalTimeEl && this.audio.duration) {\n            totalTimeEl.textContent = this.formatTime(this.audio.duration);\n        }\n    }\n    \n    updateProgress() {\n        const currentTimeEl = document.querySelector('.current-time');\n        const progressFill = document.querySelector('.progress-fill');\n        \n        if (currentTimeEl && this.audio.currentTime) {\n            currentTimeEl.textContent = this.formatTime(this.audio.currentTime);\n        }\n        \n        if (progressFill && this.audio.duration) {\n            const progress = (this.audio.currentTime / this.audio.duration) * 100;\n            progressFill.style.width = `${progress}%`;\n        }\n    }\n    \n    formatTime(seconds) {\n        const mins = Math.floor(seconds / 60);\n        const secs = Math.floor(seconds % 60);\n        return `${mins}:${secs.toString().padStart(2, '0')}`;\n    }\n}\n\n// Instance globale\nwindow.playlistManager = new PlaylistManager();