export default function Home() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>L'Âme du Vinyle</h1>
          <div className="subtitle">Rencontre le Streaming</div>
          <p>
            Plongez dans une expérience sonore inédite où la chaleur authentique des vinyles 
            rencontre la modernité du streaming haute définition. Redécouvrez vos classiques 
            préférés et explorez de nouveaux univers musicaux avec une qualité audio 
            exceptionnelle qui respecte l'essence même de chaque note.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">
              Commencer l'Écoute
            </button>
          </div>
        </div>
        
        <div className="vinyl-container">
          <div className="vinyl-player">
            <div className="turntable-base"></div>
            <div className="vinyl-record"></div>
            <div className="tonearm"></div>
            <div className="sound-waves">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
            <div className="floating-notes">
              <div className="note">♪</div>
              <div className="note">♫</div>
              <div className="note">♪</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}