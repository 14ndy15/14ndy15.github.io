// import {makeLayers} from "./_utils";

import axios from "axios";
import Leaflet from "leaflet";

class Grid {
    constructor(mapLeaflet, CONST_PARAMETER) {
        this.mapLeaflet = mapLeaflet;
        this.map = this.mapLeaflet.map;
        this.CONST_PARAMETER = CONST_PARAMETER;

        this.geoJson = null;
        this.addLayers();
    }

    addLayers() {
        let layers = {
            grid: null,
        };

        let geoJsons = {
            grid: '/public/GeoJson/milano-grid.geojson',
        };

        let clickFunctions = {
            grid: (e) => {},
        };

        let tooltipFunctions = {
            grid: (layer) => {
                let cell_id = layer.feature.properties.cellId;
                return `The cell_id is: ${cell_id}`;
            },
        };

        let styles = {
            grid: this.CONST_PARAMETER.DEFAULT_STYLE
        };

        for (let layer in layers) {
            if (!layers.hasOwnProperty(layer))
                continue;

            let layerUrl = geoJsons[layer];
            axios.get(layerUrl).then((response) => {

                let data = response.data;

                layers[layer] = new Leaflet.FeatureGroup();

                data["features"].forEach((feature) => {

                    let region = Leaflet.geoJSON(feature, {
                        style: styles[layer],
                        onEachFeature: (_feature, _layer) => {
                            _layer.on({
                                click: clickFunctions[layer],
                            }).bindTooltip(tooltipFunctions[layer]).openTooltip();

                        },
                    });


                    layers[layer].addLayer(region);
                });


                this.mapLeaflet.addLayer(layers[layer], layer.toString());

            }).catch((error) => {
                console.log(error);
            });

        }

    }
}

export default Grid;