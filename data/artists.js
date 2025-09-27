// Base de données des artistes - Organisée par popularité
const artistsData = {
    // Top Tier - Très populaires
    "gims": {
        id: "gims",
        name: "Gims",
        image: "images/artists/gims.jpg",
        popularity: 100,
        albums: [
            {
                id: "subliminal",
                title: "Subliminal",
                year: 2013,
                cover: "images/albums/gims-subliminal.jpg",
                tracks: [
                    { title: "J'me tire", duration: "3:32" },
                    { title: "Bella", duration: "3:45" },
                    { title: "Zombie", duration: "3:28" },
                    { title: "Meurtre par strangulation", duration: "4:12" },
                    { title: "Changer", duration: "3:55" }
                ]
            },
            {
                id: "mon-coeur-avait-raison",
                title: "Mon cœur avait raison",
                year: 2015,
                cover: "images/albums/gims-mon-coeur-avait-raison.jpg",
                tracks: [
                    { title: "Est-ce que tu m'aimes ?", duration: "3:42" },
                    { title: "Sapés comme jamais", duration: "3:38" },
                    { title: "Laissez passer", duration: "3:25" },
                    { title: "Tout donner", duration: "3:48" }
                ]
            },
            {
                id: "ceinture-noire",
                title: "Ceinture noire",
                year: 2018,
                cover: "images/albums/gims-ceinture-noire.jpg",
                tracks: [
                    { title: "Caméléon", duration: "3:15" },
                    { title: "La même", duration: "3:33" },
                    { title: "Loin", duration: "3:41" },
                    { title: "Reste", duration: "3:29" }
                ]
            }
        ]
    },

    "dadju": {
        id: "dadju",
        name: "Dadju",
        image: "images/artists/dadju.jpg",
        popularity: 95,
        albums: [
            {
                id: "gentleman-20",
                title: "Gentleman 2.0",
                year: 2017,
                cover: "images/albums/dadju-gentleman-20.jpg",
                tracks: [
                    { title: "Reine", duration: "3:28" },
                    { title: "Jaloux", duration: "3:15" },
                    { title: "Bob Marley", duration: "3:42" },
                    { title: "Compliqué", duration: "3:33" }
                ]
            },
            {
                id: "poison-ou-antidote",
                title: "Poison ou antidote",
                year: 2021,
                cover: "images/albums/dadju-poison-ou-antidote.jpg",
                tracks: [
                    { title: "Dieu merci", duration: "3:18" },
                    { title: "Grand bain", duration: "3:25" },
                    { title: "Bobo au cœur", duration: "3:37" },
                    { title: "Makila", duration: "3:44" }
                ]
            }
        ]
    },

    "tiakola": {
        id: "tiakola",
        name: "Tiakola",
        image: "images/artists/tiakola.jpg",
        popularity: 90,
        albums: [
            {
                id: "melodie",
                title: "Mélodie",
                year: 2022,
                cover: "images/albums/tiakola-melodie.jpg",
                tracks: [
                    { title: "La clé", duration: "2:58" },
                    { title: "Gasolina", duration: "3:12" },
                    { title: "Mama", duration: "3:05" },
                    { title: "Séléné", duration: "3:28" }
                ]
            },
            {
                id: "libre",
                title: "Libre",
                year: 2023,
                cover: "images/albums/tiakola-libre.jpg",
                tracks: [
                    { title: "Libre", duration: "3:15" },
                    { title: "Melo", duration: "2:48" },
                    { title: "Sombre", duration: "3:22" }
                ]
            }
        ]
    },

    "ninho": {
        id: "ninho",
        name: "Ninho",
        image: "images/artists/ninho.jpg",
        popularity: 88,
        albums: [
            {
                id: "comme-prevu",
                title: "Comme prévu",
                year: 2017,
                cover: "images/albums/ninho-comme-prevu.jpg",
                tracks: [
                    { title: "Mamacita", duration: "3:25" },
                    { title: "Goutte d'eau", duration: "3:18" },
                    { title: "Fendi", duration: "3:33" }
                ]
            },
            {
                id: "destin",
                title: "Destin",
                year: 2019,
                cover: "images/albums/ninho-destin.jpg",
                tracks: [
                    { title: "Lettre à une femme", duration: "4:12" },
                    { title: "Réseaux", duration: "3:28" },
                    { title: "Zipette", duration: "3:15" }
                ]
            }
        ]
    },

    "booba": {
        id: "booba",
        name: "Booba",
        image: "images/artists/booba.jpg",
        popularity: 92,
        albums: [
            {
                id: "nero-nemesis",
                title: "Nero Nemesis",
                year: 2015,
                cover: "images/albums/booba-nero-nemesis.jpg",
                tracks: [
                    { title: "Validée", duration: "3:45" },
                    { title: "OKLM", duration: "3:28" },
                    { title: "Scarface", duration: "4:02" }
                ]
            }
        ]
    },

    "aya-nakamura": {
        id: "aya-nakamura",
        name: "Aya Nakamura",
        image: "images/artists/aya-nakamura.jpg",
        popularity: 94,
        albums: [
            {
                id: "nakamura",
                title: "Nakamura",
                year: 2018,
                cover: "images/albums/aya-nakamura-nakamura.jpg",
                tracks: [
                    { title: "Djadja", duration: "2:56" },
                    { title: "Copines", duration: "3:12" },
                    { title: "La dot", duration: "3:25" }
                ]
            }
        ]
    },

    "pnl": {
        id: "pnl",
        name: "PNL",
        image: "images/artists/pnl.jpg",
        popularity: 89,
        albums: [
            {
                id: "dans-la-legende",
                title: "Dans la légende",
                year: 2016,
                cover: "images/albums/pnl-dans-la-legende.jpg",
                tracks: [
                    { title: "DA", duration: "4:15" },
                    { title: "Naha", duration: "3:42" },
                    { title: "Bené", duration: "3:28" }
                ]
            }
        ]
    }
};

// Fonction pour obtenir les artistes triés par popularité
function getArtistsByPopularity() {
    return Object.values(artistsData).sort((a, b) => b.popularity - a.popularity);
}

// Fonction de recherche d'artistes
function searchArtists(query) {
    const lowercaseQuery = query.toLowerCase();
    return Object.values(artistsData).filter(artist => 
        artist.name.toLowerCase().includes(lowercaseQuery)
    ).sort((a, b) => b.popularity - a.popularity);
}