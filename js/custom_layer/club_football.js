const layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: 'data/clubs_football.geojson',
        format: new ol.format.GeoJSON(),
    }),
    style: function (feature, resolution) {
        const minResolutionForLabels = 1000; // Ajuste la valeur selon tes préférences
        const showLabels = resolution < minResolutionForLabels;

        return new ol.style.Style({
            // image: new ol.style.Circle({
            //     radius: 3,
            //     fill: new ol.style.Fill({
            //         color: '#A2D9CE', // Couleur des points
            //     }),
            //     stroke: new ol.style.Stroke({
            //         color: '#0B5345',
            //         width: 1,
            //     }),
            // }),
            image: new ol.style.Icon({
                anchor: [0.5, 1],
                src: 'img/svg/football.svg', // Remplace par le chemin correct vers ton fichier SVG
                scale: 0.02, // Ajuste la valeur pour la taille de l'icône
            }),
            text: showLabels ? new ol.style.Text({
                text: feature.get('nom_club'),
                font: 'bold 14px Calibri,sans-serif', // Utilise une police en gras
                fill: new ol.style.Fill({
                    color: 'white', // Couleur du texte
                }),
                stroke: new ol.style.Stroke({
                    color: '#212F3C',
                    width: 10,
                }),
                offsetY: -25, // Ajuste la valeur selon tes préférences
                offsetX: -25, // Ajuste la valeur selon tes préférences
                minResolution: minResolutionForLabels,
            }) : undefined, // Si showLabels est faux, n'ajoute pas le style du label
        });
    },
});

new CustomLayer('clubs_football_custom', layer);