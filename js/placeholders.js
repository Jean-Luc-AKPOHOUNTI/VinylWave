// Générateur de placeholders pour les images manquantes
class PlaceholderGenerator {
    static generateArtistPlaceholder(artistName) {
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 300;
        const ctx = canvas.getContext('2d');
        
        // Gradient background
        const gradient = ctx.createLinearGradient(0, 0, 300, 300);
        gradient.addColorStop(0, '#ff6b35');
        gradient.addColorStop(1, '#f7931e');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 300, 300);
        
        // Artist initials
        const initials = artistName.split(' ').map(word => word[0]).join('').toUpperCase();
        ctx.fillStyle = 'white';
        ctx.font = 'bold 80px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(initials, 150, 150);
        
        return canvas.toDataURL();
    }
    
    static generateAlbumPlaceholder(albumTitle) {
        const canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 200;
        const ctx = canvas.getContext('2d');
        
        // Dark background
        ctx.fillStyle = '#333';
        ctx.fillRect(0, 0, 200, 200);
        
        // Vinyl record effect
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 2;
        for (let i = 20; i < 100; i += 15) {
            ctx.beginPath();
            ctx.arc(100, 100, i, 0, 2 * Math.PI);
            ctx.stroke();
        }
        
        // Center hole
        ctx.fillStyle = '#ff6b35';
        ctx.beginPath();
        ctx.arc(100, 100, 15, 0, 2 * Math.PI);
        ctx.fill();
        
        // Album title
        ctx.fillStyle = 'white';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Wrap text
        const words = albumTitle.split(' ');
        const lines = [];
        let currentLine = '';
        
        words.forEach(word => {
            const testLine = currentLine + (currentLine ? ' ' : '') + word;
            const metrics = ctx.measureText(testLine);
            if (metrics.width > 160 && currentLine) {
                lines.push(currentLine);
                currentLine = word;
            } else {
                currentLine = testLine;
            }
        });
        lines.push(currentLine);
        
        const lineHeight = 14;
        const startY = 100 - (lines.length - 1) * lineHeight / 2;
        
        lines.forEach((line, index) => {
            ctx.fillText(line, 100, startY + index * lineHeight);
        });
        
        return canvas.toDataURL();
    }
}

// Fonction utilitaire pour vérifier et remplacer les images manquantes
function handleImageError(img, type, name) {
    img.onerror = null; // Éviter les boucles infinies
    
    if (type === 'artist') {
        img.src = PlaceholderGenerator.generateArtistPlaceholder(name);
    } else if (type === 'album') {
        img.src = PlaceholderGenerator.generateAlbumPlaceholder(name);
    }
}

// Mise à jour des données d'artistes avec placeholders
function updateArtistDataWithPlaceholders() {
    Object.values(artistsData).forEach(artist => {
        // Vérifier l'image de l'artiste
        const img = new Image();
        img.onload = () => {
            // Image existe, rien à faire
        };
        img.onerror = () => {
            artist.image = PlaceholderGenerator.generateArtistPlaceholder(artist.name);
        };
        img.src = artist.image;
        
        // Vérifier les couvertures d'albums
        if (artist.albums) {
            artist.albums.forEach(album => {
                if (!album.cover) {
                    album.cover = PlaceholderGenerator.generateAlbumPlaceholder(album.title);
                } else {
                    const albumImg = new Image();
                    albumImg.onload = () => {
                        // Image existe, rien à faire
                    };
                    albumImg.onerror = () => {
                        album.cover = PlaceholderGenerator.generateAlbumPlaceholder(album.title);
                    };
                    albumImg.src = album.cover;
                }
            });
        }
    });
}