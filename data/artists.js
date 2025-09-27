// Base de données des artistes - Organisée par popularité
const artistsData = {
    // Top Tier - Très populaires
    "gims": {
        id: "gims",
        name: "Gims",
    image: "images/artists/Gims.webp",
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
    image: "images/artists/Dadju.jpg",
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
                cover: "images/albums/dadju-poison-ou-antidote.webp",
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
    image: "images/artists/tiakola.webp",
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

    "burna-boy": {
        id: "burna-boy",
        name: "Burna Boy",
        image: "images/artists/burna-boy.webp",
        popularity: 98,
        albums: [
            {
                id: "twice-as-tall",
                title: "Twice As Tall",
                year: 2020,
                cover: "images/albums/burna-boy-twice-as-tall.webp",
                tracks: [
                    { title: "Level Up", duration: "3:10" },
                    { title: "Monsters", duration: "3:45" },
                    { title: "Wonderful", duration: "3:30" }
                ]
            }
        ]
    },

    "wizkid": {
        id: "wizkid",
        name: "Wizkid",
        image: "images/artists/wizkid.webp",
        popularity: 97,
        albums: [
            {
                id: "made-in-lagos",
                title: "Made in Lagos",
                year: 2020,
                cover: "images/albums/wizkid-made-in-lagos.png",
                tracks: [
                    { title: "Ginger", duration: "3:12" },
                    { title: "Smile", duration: "3:40" }
                ]
            }
        ]
    },

    "davido": {
        id: "davido",
        name: "Davido",
        image: "images/artists/davido.jpg",
        popularity: 96,
        albums: [
            {
                id: "a-good-time",
                title: "A Good Time",
                year: 2019,
                cover: "images/albums/davido-a-good-time.jpg",
                tracks: [
                    { title: "Risky", duration: "3:05" },
                    { title: "IF", duration: "3:20" }
                ]
            }
        ]
    },

    "tiwa-savage": {
        id: "tiwa-savage",
        name: "Tiwa Savage",
        image: "images/artists/tiwa-savage.jpg",
        popularity: 90,
        albums: [
            {
                id: "celia",
                title: "Celia",
                year: 2020,
                cover: "images/albums/tiwa-savage-celia.jpg",
                tracks: [
                    { title: "Koroba", duration: "3:18" },
                    { title: "Attention", duration: "3:08" }
                ]
            }
        ]
    },

    "youssou-ndour": {
        id: "youssou-ndour",
        name: "Youssou N'Dour",
        image: "images/artists/youssou-ndour.jpg",
        popularity: 85,
        albums: [
            {
                id: "egypt",
                title: "Egypt",
                year: 2004,
                cover: "images/albums/youssou-ndour-egypt.jpg",
                tracks: [
                    { title: "Egypt", duration: "4:02" },
                    { title: "Dem", duration: "3:55" }
                ]
            }
        ]
    },

    "sarkodie": {
        id: "sarkodie",
        name: "Sarkodie",
        image: "images/artists/sarkodie.jpg",
        popularity: 84,
        albums: [
            {
                id: "black-love",
                title: "Black Love",
                year: 2019,
                cover: "images/albums/sarkodie-black-love.jpg",
                tracks: [
                    { title: "Lucky", duration: "3:22" },
                    { title: "No Fugazy", duration: "3:35" }
                ]
            }
        ]
    },

    "shatta-wale": {
        id: "shatta-wale",
        name: "Shatta Wale",
        image: "images/artists/shatta-wale.jpg",
        popularity: 82,
        albums: [
            {
                id: "reign",
                title: "Reign",
                year: 2018,
                cover: "images/albums/shatta-wale-reign.jpg",
                tracks: [
                    { title: "Disrespectful", duration: "3:05" },
                    { title: "Gringo", duration: "3:40" }
                ]
            }
        ]
    },

    "olamide": {
        id: "olamide",
        name: "Olamide",
        image: "images/artists/olamide.jpg",
        popularity: 83,
        albums: [
            {
                id: "carpe-diem",
                title: "Carpe Diem",
                year: 2020,
                cover: "images/albums/olamide-carpe-diem.jpg",
                tracks: [
                    { title: "Infinity", duration: "2:58" },
                    { title: "Rock", duration: "3:12" }
                ]
            }
        ]
    },

    "kizz-daniel": {
        id: "kizz-daniel",
        name: "Kizz Daniel",
        image: "images/artists/kizz-daniel.jpg",
        popularity: 81,
        albums: [
            {
                id: "no-bad-songz",
                title: "No Bad Songz",
                year: 2018,
                cover: "images/albums/kizz-daniel-no-bad-songz.jpg",
                tracks: [
                    { title: "Mama", duration: "3:20" },
                    { title: "Fvck You", duration: "3:05" }
                ]
            }
        ]
    },

    "rema": {
        id: "rema",
        name: "Rema",
        image: "images/artists/rema.jpg",
        popularity: 86,
        albums: [
            {
                id: "rema-ep",
                title: "Rema (EP)",
                year: 2019,
                cover: "images/albums/rema-ep.jpg",
                tracks: [
                    { title: "Iron Man", duration: "2:40" },
                    { title: "Dumebi", duration: "3:05" }
                ]
            }
        ]
    },

    "adekunle-gold": {
        id: "adekunle-gold",
        name: "Adekunle Gold",
        image: "images/artists/adekunle-gold.jpg",
        popularity: 80,
        albums: [
            {
                id: "about-30",
                title: "About 30",
                year: 2018,
                cover: "images/albums/adekunle-gold-about-30.jpg",
                tracks: [
                    { title: "Sinner", duration: "3:25" },
                    { title: "Something Different", duration: "3:12" }
                ]
            }
        ]
    },

    "simi": {
        id: "simi",
        name: "Simi",
        image: "images/artists/simi.jpg",
        popularity: 79,
        albums: [
            {
                id: "omo-charlie",
                title: "Omo Charlie Champagne, Vol. 1",
                year: 2019,
                cover: "images/albums/simi-omo-charlie.jpg",
                tracks: [
                    { title: "By You", duration: "3:05" },
                    { title: "There For You", duration: "3:15" }
                ]
            }
        ]
    },

    "mr-eazi": {
        id: "mr-eazi",
        name: "Mr Eazi",
        image: "images/artists/mr-eazi.jpg",
        popularity: 78,
        albums: [
            {
                id: "life-is-eazi-vol-2",
                title: "Life Is Eazi, Vol. 2",
                year: 2019,
                cover: "images/albums/mr-eazi-life-is-eazi-vol-2.jpg",
                tracks: [
                    { title: "Leg Over", duration: "3:22" },
                    { title: "E Be Tins", duration: "3:10" }
                ]
            }
        ]
    },

    "angelique-kidjo": {
        id: "angelique-kidjo",
        name: "Angélique Kidjo",
        image: "images/artists/angelique-kidjo.jpg",
        popularity: 88,
        albums: [
            {
                id: "eve",
                title: "Eve",
                year: 2014,
                cover: "images/albums/angelique-kidjo-eve.jpg",
                tracks: [
                    { title: "Agolo", duration: "4:05" },
                    { title: "Batonga", duration: "4:22" }
                ]
            }
        ]
    },

    "salif-keita": {
        id: "salif-keita",
        name: "Salif Keita",
        image: "images/artists/salif-keita.jpg",
        popularity: 87,
        albums: [
            {
                id: "moffou",
                title: "Moffou",
                year: 2002,
                cover: "images/albums/salif-keita-moffou.jpg",
                tracks: [
                    { title: "Moffou", duration: "5:00" },
                    { title: "Seydou", duration: "4:12" }
                ]
            }
        ]
    },

    "ninho": {
        id: "ninho",
        name: "Ninho",
    image: "images/artists/ninho.webp",
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
    image: "images/artists/booba.webp",
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