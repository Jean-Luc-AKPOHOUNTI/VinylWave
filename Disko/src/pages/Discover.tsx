import DiscoverCarousel from '../components/DiscoverCarousel'

export default function Discover() {
  return (
    <section className="discover-section">
      <div className="discover-container">
        <DiscoverCarousel />
      </div>
      
      <div id="instructions-modal" className="instructions-modal">
        <div className="modal-backdrop"></div>
        <div className="instructions-content">
          <div className="instructions-header">
            <h3>🎵 Comment naviguer</h3>
            <button className="close-instructions" aria-label="Fermer">×</button>
          </div>
          <div className="instructions-body">
            <div className="instruction-item">
              <div className="keys-group">
                <span className="key">←</span>
                <span className="key">→</span>
              </div>
              <span>Naviguer entre les artistes</span>
            </div>
            <div className="instruction-item">
              <span className="key">Entrée</span>
              <span>Sélectionner un artiste</span>
            </div>
            <div className="instruction-item">
              <span className="key">Échap</span>
              <span>Quitter la section</span>
            </div>
          </div>
          <div className="instructions-footer">
            <button className="got-it-btn">J'ai compris !</button>
          </div>
        </div>
      </div>
    </section>
  )
}