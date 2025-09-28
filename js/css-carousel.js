// Carrousel 3D CSS pur
class CSSCarousel {
    constructor() {
        this.selectedArtists = this.getSelectedArtists();
        this.currentIndex = 0;
        this.isAnimating = false;
        this.radius = 350;
        
        this.init();
    }
    
    getSelectedArtists() {
        const artistIds = ['ninho', 'wizkid', 'tiakola', 'gims', 'davido', 'kizz-daniel', 'dadju', 'burna-boy', 'mr-eazi', 'rema'];
        return artistIds.map(id => artistsData[id]).filter(artist => artist);
    }
    
    init() {
        this.createCards();
        this.setupEventListeners();
        this.updateCarousel();
        this.setupListenButton();
    }
    
    createCards() {
        const container = document.querySelector('.carousel-cards');
        if (!container) return;
        
        container.innerHTML = '';
        
        this.selectedArtists.forEach((artist, index) => {
            const card = document.createElement('div');
            card.className = `artist-card ${index === 0 ? 'active' : ''}`;
            card.dataset.index = index;
            
            const angle = (index / this.selectedArtists.length) * 360;
            const rotateY = angle;
            const translateZ = this.radius;
            
            card.style.transform = `rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
            
            card.innerHTML = `
                <img src="${artist.image}" alt="${artist.name}" class="artist-image" 
                     onerror="this.src='${this.generatePlaceholder(artist.name)}'">
                <div class="play-overlay">
                    <div class="play-button">
                        <svg class="play-svg" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
            `;
            
            card.addEventListener('click', () => {
                if (index === this.currentIndex) {
                    this.openArtistModal(artist);
                } else {
                    this.rotateTo(index);
                }
            });
            
            container.appendChild(card);
        });
    }
    
    generatePlaceholder(artistName) {
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 300;
        const ctx = canvas.getContext('2d');
        
        const gradient = ctx.createLinearGradient(0, 0, 300, 300);
        gradient.addColorStop(0, '#ff6b35');
        gradient.addColorStop(1, '#f7931e');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 300, 300);
        
        const initials = artistName.split(' ').map(word => word[0]).join('').toUpperCase();
        ctx.fillStyle = 'white';
        ctx.font = 'bold 80px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(initials, 150, 150);
        
        return canvas.toDataURL();
    }
    
    setupEventListeners() {
        // Scroll
        window.addEventListener('wheel', (e) => {
            if (!this.isAnimating && document.getElementById('discover').style.display !== 'none') {
                e.preventDefault();
                if (e.deltaY > 0) {
                    this.next();
                } else {
                    this.previous();
                }
            }
        });
        
        // Clavier
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('discover').style.display !== 'none') {
                if (e.key === 'ArrowRight') this.next();
                if (e.key === 'ArrowLeft') this.previous();
                if (e.key === 'Enter') this.openArtistModal(this.selectedArtists[this.currentIndex]);
            }
        });
        
        // Barre de recherche
        this.setupSearch();
    }
    
    setupSearch() {
        const searchInput = document.querySelector('.search-input');
        const searchResults = document.querySelector('.search-results');
        
        if (!searchInput || !searchResults) return;
        
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }
            
            const filtered = Object.values(artistsData).filter(artist => 
                artist.name.toLowerCase().includes(query)
            );
            
            // Trier par popularité
            filtered.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
            
            searchResults.innerHTML = '';
            
            if (filtered.length === 0) {
                searchResults.innerHTML = '<div class="no-results">Aucun artiste trouvé</div>';
            } else {
                filtered.forEach(artist => {
                    const item = document.createElement('div');
                    item.className = 'search-result-item';
                    item.innerHTML = `
                        <img src="${artist.image}" alt="${artist.name}" class="result-avatar">
                        <span class="result-name">${artist.name}</span>
                    `;
                    item.addEventListener('click', () => {
                        const index = this.selectedArtists.findIndex(a => a.id === artist.id);
                        if (index !== -1) {
                            this.rotateTo(index);
                        } else {
                            // Si l'artiste n'est pas dans le carrousel, ouvrir directement le modal
                            this.openArtistModal(artist);
                        }
                        searchResults.style.display = 'none';
                        searchInput.value = '';
                    });
                    searchResults.appendChild(item);
                });
            }
            
            searchResults.style.display = 'block';
        });
    }
    
    next() {
        if (this.isAnimating) return;
        
        // Passage infini vers l'avant
        this.currentIndex++;
        if (this.currentIndex >= this.selectedArtists.length) {
            this.currentIndex = 0;
        }
        
        this.updateCarousel();
    }
    
    previous() {
        if (this.isAnimating) return;
        
        // Passage infini vers l'arrière
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.selectedArtists.length - 1;
        }
        
        this.updateCarousel();
    }
    
    rotateTo(index) {
        if (this.isAnimating || index === this.currentIndex) return;
        this.currentIndex = index;
        this.updateCarousel();
    }
    
    updateCarousel() {
        this.isAnimating = true;
        
        const carousel = document.querySelector('.carousel-3d');
        const cards = document.querySelectorAll('.artist-card');
        
        if (!carousel) return;
        
        // Rotation continue infinie
        const rotationAngle = -(this.currentIndex / this.selectedArtists.length) * 360;
        carousel.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        carousel.style.transform = `rotateY(${rotationAngle}deg)`;
        
        // Mise à jour des cartes et des informations
        cards.forEach((card, index) => {
            card.classList.toggle('active', index === this.currentIndex);
        });
        
        this.updateArtistInfo();
        
        // Fin de l'animation
        setTimeout(() => {
            this.isAnimating = false;
        }, 800);
    }
    
    updateArtistInfo() {
        const currentArtist = this.selectedArtists[this.currentIndex];
        if (!currentArtist) return;
        
        // Mise à jour du compteur
        const positionEl = document.querySelector('.current-position');
        const totalEl = document.querySelector('.total-artists');
        if (positionEl) positionEl.textContent = this.currentIndex + 1;
        if (totalEl) totalEl.textContent = this.selectedArtists.length;
        
        // Mise à jour du nom
        const nameEl = document.querySelector('.current-artist-name');
        if (nameEl) nameEl.textContent = currentArtist.name;
        
        // Mise à jour des détails
        const genreEl = document.querySelector('.artist-genre');
        const albumsEl = document.querySelector('.artist-albums-count');
        if (genreEl) genreEl.textContent = this.getArtistGenre(currentArtist.id);
        if (albumsEl) albumsEl.textContent = `${currentArtist.albums?.length || 0} album(s)`;
    }
    
    getArtistGenre(artistId) {
        const genres = {
            'ninho': 'Rap Français',
            'wizkid': 'Afrobeats',
            'tiakola': 'Rap Français',
            'gims': 'Rap/Pop',
            'davido': 'Afrobeats',
            'kizz-daniel': 'Afrobeats',
            'dadju': 'R&B/Pop',
            'burna-boy': 'Afrofusion',
            'mr-eazi': 'Afrobeats',
            'rema': 'Afrobeats'
        };
        return genres[artistId] || 'Musique';
    }

    setupListenButton() {
        const listenBtn = document.querySelector('.listen-btn');
        if (listenBtn) {
            listenBtn.addEventListener('click', () => {
                const currentArtist = this.selectedArtists[this.currentIndex];
                this.openArtistModal(currentArtist);
            });
        }
    }

    openArtistModal(artist) {
        const modal = new ArtistModal(artist);
        modal.show();
    }
}

// Initialisation
let cssCarouselInstance = null;

function initCSSCarousel() {
    if (!cssCarouselInstance && typeof artistsData !== 'undefined') {
        cssCarouselInstance = new CSSCarousel();
    }
}