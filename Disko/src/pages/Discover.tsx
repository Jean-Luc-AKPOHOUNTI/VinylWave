import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, CornerDownLeft, X } from 'lucide-react'
import DiscoverCarousel from '../components/DiscoverCarousel'

export default function Discover() {
  const [showInstructions, setShowInstructions] = useState(false)

  useEffect(() => {
    try {
      const hasSeenInstructions = localStorage.getItem('discover-instructions-seen')
      if (!hasSeenInstructions) {
        setShowInstructions(true)
      }
    } catch (error) {
      // Fallback si localStorage n'est pas disponible (navigation privée)
      setShowInstructions(true)
    }
  }, [])

  const handleCloseInstructions = () => {
    setShowInstructions(false)
    try {
      localStorage.setItem('discover-instructions-seen', 'true')
    } catch (error) {
      // Ignore l'erreur si localStorage n'est pas disponible
    }
  }

  return (
    <section className="discover-section">
      <div className="discover-container">
        <DiscoverCarousel />
      </div>
      
      {showInstructions && (
        <div id="instructions-modal" className={`instructions-modal ${showInstructions ? 'show' : ''}`}>
          <div className="modal-backdrop" onClick={handleCloseInstructions}></div>
          <div className="instructions-content">
            <div className="instructions-header">
              <h3>Comment naviguer</h3>
              <button className="close-instructions" onClick={handleCloseInstructions} aria-label="Fermer">
                <X size={20} />
              </button>
            </div>
            <div className="instructions-body">
              <div className="instruction-item">
                <div className="keys-group">
                  <span className="key"><ArrowLeft size={16} /></span>
                  <span className="key"><ArrowRight size={16} /></span>
                </div>
                <span>Naviguer entre les artistes</span>
              </div>
              <div className="instruction-item">
                <span className="key"><CornerDownLeft size={16} /></span>
                <span>Sélectionner un artiste</span>
              </div>
              <div className="instruction-item">
                <span className="key">Échap</span>
                <span>Quitter la section</span>
              </div>
            </div>
            <div className="instructions-footer">
              <button className="got-it-btn" onClick={handleCloseInstructions}>J'ai compris !</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}