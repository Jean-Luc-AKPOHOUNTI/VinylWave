export default function Playlists() {
  return (
    <section className="playlist-section">
      <div className="playlist-container">
        <div className="vinyl-player-section">                
          <div className="album-cover-main">
            <img src="/images/albums/gentleman-20.jpg" alt="Gentleman 2.0 - Dadju" />
          </div>
          
          <div className="audio-controls">
            <button className="control-btn shuffle-btn">
              <svg className="control-icon" viewBox="0 0 24 24">
                <path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
              </svg>
            </button>
            
            <button className="control-btn prev-btn">
              <svg className="control-icon" viewBox="0 0 24 24">
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
              </svg>
            </button>
            
            <button className="control-btn play-pause-btn">
              <svg className="control-icon play-icon" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
            
            <button className="control-btn next-btn">
              <svg className="control-icon" viewBox="0 0 24 24">
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
              </svg>
            </button>
            
            <button className="control-btn repeat-btn">
              <svg className="control-icon" viewBox="0 0 24 24">
                <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
              </svg>
            </button>
          </div>
          
          <div className="progress-container">
            <div className="progress-info">
              <span className="current-time">1:23</span>
              <span className="total-time">3:28</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="tracklist-section">
          <div className="tracklist-header">
            <div className="tracklist-title">Gentleman 2.0</div>
            <div className="album-info">
              <div>Dadju • 2017</div>
              <div>4 pistes • 14 min</div>
            </div>
          </div>
          
          <div className="tracks-container">
            <div className="track-item active">
              <div className="track-number">1</div>
              <div className="track-info">
                <div className="track-title">Reine</div>
              </div>
              <div className="track-duration">3:28</div>
              <div className="track-actions">
                <button className="track-action-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
                <button className="track-action-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="track-item">
              <div className="track-number">2</div>
              <div className="track-info">
                <div className="track-title">Jaloux</div>
              </div>
              <div className="track-duration">3:15</div>
              <div className="track-actions">
                <button className="track-action-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
                <button className="track-action-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="track-item">
              <div className="track-number">3</div>
              <div className="track-info">
                <div className="track-title">Bob Marley</div>
              </div>
              <div className="track-duration">3:42</div>
              <div className="track-actions">
                <button className="track-action-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
                <button className="track-action-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="track-item">
              <div className="track-number">4</div>
              <div className="track-info">
                <div className="track-title">Compliqué</div>
              </div>
              <div className="track-duration">3:33</div>
              <div className="track-actions">
                <button className="track-action-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </button>
                <button className="track-action-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}