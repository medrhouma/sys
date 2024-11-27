// Récupère les paramètres de l'URL pour déterminer la planète sélectionnée
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const planetName = urlParams.get('name');

    console.log("Nom de la planète sélectionnée :", planetName);

    // Dictionnaire des données des planètes
    const planetData = {
        "Mercure": {
            "image": "https://th.bing.com/th?id=OIP.9H1wqdjFijWxZup99MgnwQHaHZ&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
            "description": "Mercure est la planète la plus proche du Soleil et la plus petite du système solaire.",
            "facts": [
                "Mercure n'a pratiquement pas d'atmosphère.",
                "Les températures peuvent varier de -173°C la nuit à 427°C le jour.",
                "Une année sur Mercure dure environ 88 jours terrestres.",
                "La surface de Mercure est couverte de cratères similaires à ceux de la Lune.",
                "Elle possède un noyau métallique qui occupe environ 85% de son rayon."
            ]
        },
        "Vénus": {
            "image": "https://th.bing.com/th/id/OIP.YAyo6GYBnQLCsGMx4Mv5ygHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "description": "Vénus est la deuxième planète du système solaire et possède une atmosphère dense et chaude.",
            "facts": [
                "Vénus a une pression atmosphérique 92 fois supérieure à celle de la Terre.",
                "Elle est souvent appelée 'l'étoile du matin' ou 'l'étoile du soir'.",
                "Une journée sur Vénus dure environ 243 jours terrestres.",
                "Sa surface est parsemée de volcans et de vastes plaines de lave.",
                "Vénus tourne dans le sens opposé à la plupart des autres planètes."
            ]
        },
        "Terre": {
            "image": "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
            "description": "La Terre est la troisième planète du système solaire et la seule connue pour abriter la vie.",
            "facts": [
                "Environ 71% de la surface de la Terre est recouverte d'eau.",
                "La Terre a une seule lune.",
                "La Terre tourne autour du Soleil en environ 365,25 jours.",
                "Le noyau interne de la Terre est plus chaud que la surface du Soleil.",
                "Les plaques tectoniques de la Terre sont responsables des tremblements de terre."
            ]
        },
        "Mars": {
            "image": "https://th.bing.com/th/id/OIP.C-wlqwznUS-AUs5MKNgfHAHaHQ?w=209&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "description": "Mars est souvent appelée la planète rouge en raison de son sol riche en oxyde de fer.",
            "facts": [
                "Mars a deux lunes : Phobos et Deimos.",
                "Des traces d'eau liquide ont été découvertes sur Mars.",
                "La température moyenne sur Mars est d'environ -60°C.",
                "Olympus Mons, le plus grand volcan du système solaire, se trouve sur Mars.",
                "Mars a des tempêtes de poussière qui peuvent couvrir toute la planète."
            ]
        },
        "Jupiter": {
            "image": "https://th.bing.com/th/id/OIP.q_aVSekcJR5Qf9bzpH1jTAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "description": "Jupiter est la plus grande planète du système solaire, célèbre pour sa Grande Tache Rouge.",
            "facts": [
                "Jupiter a 79 lunes connues.",
                "La Grande Tache Rouge est une tempête géante qui dure depuis au moins 400 ans.",
                "Une journée sur Jupiter dure environ 10 heures terrestres.",
                "Jupiter a un puissant champ magnétique.",
                "La planète est principalement composée d'hydrogène et d'hélium."
            ]
        },
        "Saturne": {
            "image": "https://th.bing.com/th/id/OIP.LOup40FxIktushsPtOfimwHaEK?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "description": "Saturne est la deuxième plus grande planète du système solaire et possède des anneaux impressionnants.",
            "facts": [
                "Les anneaux de Saturne sont principalement constitués de glace et de poussière.",
                "Saturne a 83 lunes connues, dont Titan est la plus grande.",
                "Saturne est la seule planète du système solaire qui est moins dense que l'eau.",
                "Ses anneaux ont été découverts en 1610 par Galilée.",
                "Saturne émet plus d'énergie qu'elle n'en reçoit du Soleil."
            ]
        },
        "Uranus": {
            "image": "https://th.bing.com/th/id/OIP.IXJnMocYt9mQkfAAn9bJywHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "description": "Uranus est une planète géante gazeuse, connue pour son inclinaison extrême.",
            "facts": [
                "Uranus tourne presque sur le côté avec une inclinaison axiale de 97,77 degrés.",
                "Elle a 27 lunes connues.",
                "Une année sur Uranus dure environ 84 ans terrestres.",
                "Uranus a été la première planète découverte avec un télescope.",
                "Ses anneaux sont sombres et difficiles à observer."
            ]
        },
        "Neptune": {
            "image": "https://th.bing.com/th/id/OIP.e-OsymCQTs5igSAHF5zq8wHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            "description": "Neptune est la planète la plus éloignée du Soleil, célèbre pour sa couleur bleue intense.",
            "facts": [
                "Neptune a 14 lunes connues.",
                "La vitesse des vents sur Neptune peut atteindre 2 100 km/h.",
                "Une journée sur Neptune dure environ 16 heures terrestres.",
                "Elle a été découverte en utilisant des calculs mathématiques.",
                "Triton, sa plus grande lune, orbite en sens inverse."
            ]
        }
    };
    
    // Mise à jour de la page avec les informations de la planète
    if (planetData[planetName]) {
        document.getElementById('planet-name').innerText = planetName;
        document.getElementById('planet-image').src = planetData[planetName].image;
        document.getElementById('planet-description').innerText = planetData[planetName].description;

        // Ajouter les faits supplémentaires
        const factsList = document.createElement('ul');
        planetData[planetName].facts.forEach(fact => {
            const listItem = document.createElement('li');
            listItem.innerText = fact;
            factsList.appendChild(listItem);
        });
        document.getElementById('planet-facts').appendChild(factsList);
    } else {
        document.getElementById('planet-name').innerText = "Planète inconnue";
        document.getElementById('planet-description').innerText = "Désolé, nous n'avons pas d'informations sur cette planète.";
    }
});
