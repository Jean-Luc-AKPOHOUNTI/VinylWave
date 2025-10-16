export default function Home() {
  return (
    <section className="h-screen relative flex items-center overflow-hidden bg-black">
      {/* Couche d'étoiles fixes */}
      <div className="absolute inset-0 z-0 stars-layer"></div>
      {/* Couche d'étoiles scintillantes */}
      <div className="absolute inset-0 z-0 twinkling-layer"></div>
      {/* SVG Wave Background descendu */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 z-0">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
          <path d="M0,150 Q150,50 300,150 Q450,250 600,150 Q750,50 900,150 Q1050,250 1200,150 L1200,300 L0,300 Z" fill="#ff6b35" fillOpacity="0.6"/>
          <path d="M0,200 Q200,100 400,200 Q600,300 800,200 Q1000,100 1200,200 L1200,300 L0,300 Z" fill="#000000" fillOpacity="0.8"/>
        </svg>
      </div>
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-orange-500/30 via-transparent to-transparent" style={{backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255, 107, 53, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(247, 147, 30, 0.2) 0%, transparent 50%)'}}></div>
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-8 relative z-10 min-h-screen">
        <div className="py-8 animate-slide-in-left">
          <h1 className="font-bebas text-6xl lg:text-8xl font-normal tracking-wider bg-gradient-to-r from-white via-orange-500 to-orange-400 bg-clip-text text-transparent leading-tight mb-8">
            L'Âme du Vinyle
          </h1>
          <div className="text-3xl lg:text-4xl text-white/90 mb-8 font-light leading-relaxed">
            Rencontre le Streaming
          </div>
          <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-12 max-w-2xl">
            Plongez dans une expérience sonore inédite où la chaleur authentique des vinyles 
            rencontre la modernité du streaming haute définition. Redécouvrez vos classiques 
            préférés et explorez de nouveaux univers musicaux avec une qualité audio 
            exceptionnelle qui respecte l'essence même de chaque note.
          </p>
          <div className="flex gap-6 flex-wrap">
            <button className="bg-gradient-to-r from-orange-500 to-orange-400 py-5 px-10 rounded-full text-white text-lg font-semibold transition-all duration-300 shadow-lg shadow-orange-500/40 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/60 relative overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></span>
              Commencer l'Écoute
            </button>
          </div>
        </div>
        
        <div className="flex justify-center items-center relative animate-slide-in-right">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-2xl shadow-black/80"></div>
            <div className="absolute top-[10%] left-[10%] w-4/5 h-4/5 bg-gradient-radial rounded-full animate-spin-slow shadow-lg shadow-orange-500/30"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full shadow-lg shadow-orange-500/50"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-900 rounded-full"></div>
            <div className="absolute top-1/5 right-[15%] w-1/3 h-1 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-full origin-right animate-tonearm-move shadow-md shadow-black/50">
              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full shadow-md shadow-orange-500/60"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              <div className="absolute inset-0 border-2 border-orange-500/30 rounded-full animate-wave-1"></div>
              <div className="absolute -inset-[10%] border-2 border-orange-500/30 rounded-full animate-wave-2"></div>
              <div className="absolute -inset-[20%] border-2 border-orange-500/30 rounded-full animate-wave-3"></div>
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/5 -left-1/5 text-2xl text-orange-500/70 animate-float-1">♪</div>
              <div className="absolute top-3/5 -right-1/5 text-2xl text-orange-500/70 animate-float-2">♫</div>
              <div className="absolute top-2/5 -left-[30%] text-2xl text-orange-500/70 animate-float-3">♪</div>
              <div className="absolute top-[10%] -right-[25%] text-xl text-orange-400/60 animate-float-1">♬</div>
              <div className="absolute bottom-[15%] -left-[20%] text-3xl text-orange-600/50 animate-float-2">♩</div>
              <div className="absolute top-[70%] -right-[10%] text-lg text-orange-500/80 animate-float-3">♪</div>
              <div className="absolute top-[30%] -right-[35%] text-2xl text-orange-400/70 animate-float-1">♫</div>
              <div className="absolute bottom-[30%] -left-[25%] text-xl text-orange-500/60 animate-float-2">♬</div>
              <div className="absolute top-[5%] -left-[15%] text-lg text-orange-600/50 animate-float-3">♩</div>
              <div className="absolute bottom-[5%] -right-[20%] text-2xl text-orange-400/80 animate-float-1">♪</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}