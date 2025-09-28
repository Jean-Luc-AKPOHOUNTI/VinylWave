// Modal pour afficher les albums d'un artiste
class ArtistModal {
    constructor(artist) {
        this.artist = artist;
        this.filteredAlbums = artist.albums || [];
        this.modal = null;
        this.searchInput = null;
        this.keydownHandler = null;
        this.hideTimeout = null;
        this.currentPage = 1;
        this.albumsPerPage = 8;
    }

    // Fonction utilitaire pour échapper le HTML
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    show() {
        this.createModal();
        this.setupEventListeners();
        document.body.style.overflow = 'hidden';
        
        requestAnimationFrame(() => {
            this.modal.classList.add('active');
            this.animateAlbumCards();
        });
    }
    
    animateAlbumCards() {
        const cards = this.modal.querySelectorAll('.album-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100 + (index * 50));
        });
    }

    hide() {
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
        }
        
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Supprimer les event listeners
        if (this.keydownHandler) {
            // amazonq-ignore-next-line
            document.removeEventListener('keydown', this.keydownHandler);
            this.keydownHandler = null;
        }
        
        this.hideTimeout = setTimeout(() => {
            if (this.modal && this.modal.parentNode) {
                this.modal.parentNode.removeChild(this.modal);
            }
        }, 300);
    }

    createModal() {
        this.modal = document.createElement('div');
        this.modal.className = 'artist-modal';
        
        // Création sécurisée du contenu
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        
        const content = document.createElement('div');
        content.className = 'modal-content';
        
        const header = this.createHeader();
        const search = this.createSearch();
        const albumsGrid = document.createElement('div');
        albumsGrid.className = 'albums-grid';
        albumsGrid.innerHTML = this.renderAlbums();
        
        const pagination = this.createPagination();
        
        content.appendChild(header);
        content.appendChild(search);
        content.appendChild(albumsGrid);
        content.appendChild(pagination);
        // amazonq-ignore-next-line
        
        this.modal.appendChild(overlay);
        this.modal.appendChild(content);
        
        document.body.appendChild(this.modal);
        this.searchInput = this.modal.querySelector('.album-search');
    }
    
    createHeader() {
        const header = document.createElement('div');
        header.className = 'modal-header';
        
        const artistInfo = document.createElement('div');
        artistInfo.className = 'artist-info';
        
        const img = document.createElement('img');
        img.src = this.artist.image || '';
        img.alt = this.escapeHtml(this.artist.name || '');
        img.className = 'artist-avatar';
        
        const details = document.createElement('div');
        details.className = 'artist-details';
        
        const h2 = document.createElement('h2');
        h2.textContent = this.artist.name || '';
        
        const p = document.createElement('p');
        p.textContent = `${this.artist.albums?.length || 0} album(s)`;
        
        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn';
        closeBtn.innerHTML = '&times;';
        
        details.appendChild(h2);
        details.appendChild(p);
        artistInfo.appendChild(img);
        artistInfo.appendChild(details);
        header.appendChild(artistInfo);
        header.appendChild(closeBtn);
        
        // amazonq-ignore-next-line
        return header;
    }
    
    createSearch() {
        const search = document.createElement('div');
        search.className = 'modal-search';
        // amazonq-ignore-next-line
        
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'album-search';
        input.placeholder = 'Rechercher un album...';
        // amazonq-ignore-next-line
        
        search.appendChild(input);
        return search;
    }

    renderAlbums() {
        if (!this.filteredAlbums.length) {
            return '<div class="no-albums">Aucun album disponible</div>';
        }

        const startIndex = (this.currentPage - 1) * this.albumsPerPage;
        const endIndex = startIndex + this.albumsPerPage;
        const albumsToShow = this.filteredAlbums.slice(startIndex, endIndex);

        return albumsToShow.map(album => {
            const albumId = album.id || '';
            const albumTitle = album.title || '';
            const albumYear = album.year || '';
            const trackCount = album.tracks?.length || 0;
            const albumCover = album.cover || this.generatePlaceholder(album.title);
            
            return `
                <div class="album-card" data-album-id="${this.escapeHtml(albumId)}">
                    <div class="album-cover">
                        <img src="${albumCover}" alt="${this.escapeHtml(albumTitle)}">
                        <div class="play-overlay">
                            <div class="play-btn">▶</div>
                        </div>
                    </div>
                    <div class="album-info">
                        <h3>${albumTitle}</h3>
                        <div class="album-details">
                            <span class="album-year">${albumYear}</span>
                            <span class="track-count">${trackCount} titres</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    createPagination() {
        const pagination = document.createElement('div');
        pagination.className = 'modal-pagination';
        
        const totalPages = Math.ceil(this.filteredAlbums.length / this.albumsPerPage);
        
        if (totalPages <= 1) {
            pagination.style.display = 'none';
            return pagination;
        }
        
        const prevBtn = document.createElement('button');
        prevBtn.className = 'pagination-btn';
        prevBtn.innerHTML = '‹';
        prevBtn.disabled = this.currentPage === 1;
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'pagination-btn';
        nextBtn.innerHTML = '›';
        nextBtn.disabled = this.currentPage === totalPages;
        
        const pageInfo = document.createElement('span');
        pageInfo.className = 'page-info';
        pageInfo.textContent = `${this.currentPage} / ${totalPages}`;
        
        pagination.appendChild(prevBtn);
        pagination.appendChild(pageInfo);
        pagination.appendChild(nextBtn);
        
        return pagination;
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
                albumCard.style.transform = 'scale(0.95)';
                albumCard.style.transition = 'transform 0.1s ease';
                
                setTimeout(() => {
                    albumCard.style.transform = 'scale(1.05)';
                    
                    setTimeout(() => {
                        const albumId = albumCard.dataset.albumId;
                        const album = this.artist.albums.find(a => a.id === albumId);
                        if (album) {
                            this.selectAlbum(album);
                        }
                    }, 100);
                }, 100);
            }
            
            if (e.target.classList.contains('pagination-btn')) {
                const isNext = e.target.innerHTML === '›';
                if (isNext && this.currentPage < Math.ceil(this.filteredAlbums.length / this.albumsPerPage)) {
                    this.currentPage++;
                } else if (!isNext && this.currentPage > 1) {
                    this.currentPage--;
                }
                this.updateAlbumsDisplay();
            }
        });

        this.keydownHandler = (e) => {
            if (e.key === 'Escape') this.hide();
        };
        document.addEventListener('keydown', this.keydownHandler);
    }

    filterAlbums(query) {
        if (!this.artist.albums) {
            this.filteredAlbums = [];
            return;
        }
        
        this.filteredAlbums = this.artist.albums.filter(album =>
            album?.title?.toLowerCase().includes(query.toLowerCase())
        );
        
        this.currentPage = 1;
        this.updateAlbumsDisplay();
    }
    
    updateAlbumsDisplay() {
        const albumsGrid = this.modal.querySelector('.albums-grid');
        const pagination = this.modal.querySelector('.modal-pagination');
        
        if (albumsGrid) {
            albumsGrid.style.opacity = '0.5';
            albumsGrid.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                albumsGrid.innerHTML = this.renderAlbums();
                albumsGrid.style.transition = 'all 0.3s ease';
                albumsGrid.style.opacity = '1';
                albumsGrid.style.transform = 'scale(1)';
                this.animateAlbumCards();
            }, 150);
        }
        
        if (pagination) {
            const newPagination = this.createPagination();
            pagination.replaceWith(newPagination);
        }
    }

    selectAlbum(album) {
        const content = this.modal.querySelector('.modal-content');
        content.style.transform = 'translate(-50%, -50%) scale(0.9)';
        content.style.opacity = '0.8';
        
        this.hide();
        
        setTimeout(() => {
            showSection('playlists');
            if (window.playlistManager) {
                window.playlistManager.loadAlbum(album, this.artist);
            }
        }, 300);
    }
}