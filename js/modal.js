// Modal pour afficher les albums d'un artiste
class ArtistModal {
    constructor(artist) {
        this.artist = artist;
        this.filteredAlbums = artist.albums || [];
        this.modal = null;
        this.searchInput = null;
    }

    show() {
        this.createModal();
        this.setupEventListeners();
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
            this.modal.classList.add('active');
        }, 10);
    }

    hide() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        
        setTimeout(() => {
            if (this.modal && this.modal.parentNode) {
                this.modal.parentNode.removeChild(this.modal);
            }
        }, 300);
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.className = 'artist-modal';
        this.modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <div class="artist-info">
                        <img src="${this.artist.image}" alt="${this.artist.name}" class="artist-avatar">
                        <div class="artist-details">
                            <h2>${this.artist.name}</h2>
                            <p>${this.artist.albums?.length || 0} album(s)</p>
                        </div>
                    </div>
                    <button class="close-btn">&times;</button>
                </div>
                
                <div class="modal-search">
                    <input type="text" class="album-search" placeholder="Rechercher un album...">
                </div>
                
                <div class="albums-grid">
                    ${this.renderAlbums()}
                </div>
            </div>
        `;

        document.body.appendChild(this.modal);
        this.searchInput = this.modal.querySelector('.album-search');
    }

    renderAlbums() {
        if (!this.filteredAlbums.length) {
            return '<div class="no-albums">Aucun album disponible</div>';
        }

        return this.filteredAlbums.map(album => `
            <div class="album-card" data-album-id="${album.id}">
                <div class="album-cover">
                    <img src="${album.cover || this.generatePlaceholder(album.title)}" alt="${album.title}">
                    <div class="play-overlay">
                        <div class="play-btn">▶</div>
                    </div>
                </div>
                <div class="album-info">
                    <h3>${album.title}</h3>
                    <p>${album.year}</p>
                    <span class="track-count">${album.tracks?.length || 0} titres</span>
                </div>
            </div>
        `).join('');
    }

    generatePlaceholder(title) {
        return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="%23333"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23fff" font-family="Arial" font-size="14">${encodeURIComponent(title)}</text></svg>`;
    }

    setupEventListeners() {
        const closeBtn = this.modal.querySelector('.close-btn');
        const overlay = this.modal.querySelector('.modal-overlay');
        
        closeBtn.addEventListener('click', () => this.hide());
        overlay.addEventListener('click', () => this.hide());

        this.searchInput.addEventListener('input', (e) => {
            this.filterAlbums(e.target.value);
        });

        this.modal.addEventListener('click', (e) => {
            const albumCard = e.target.closest('.album-card');
            if (albumCard) {
                const albumId = albumCard.dataset.albumId;
                const album = this.artist.albums.find(a => a.id === albumId);
                if (album) {
                    this.selectAlbum(album);
                }
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.hide();
        });
    }

    filterAlbums(query) {
        this.filteredAlbums = this.artist.albums.filter(album =>
            album.title.toLowerCase().includes(query.toLowerCase())
        );
        
        const albumsGrid = this.modal.querySelector('.albums-grid');
        albumsGrid.innerHTML = this.renderAlbums();
    }

    selectAlbum(album) {
        this.hide();
        
        setTimeout(() => {
            showSection('playlists');
            if (window.playlistManager) {
                window.playlistManager.loadAlbum(album, this.artist);
            }
        }, 300);
    }
}