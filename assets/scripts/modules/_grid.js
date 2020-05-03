// import {makeLayers} from "./_utils";

import axios from "axios";
import Leaflet from "leaflet";

class Grid {
    constructor(mapLeaflet, CONST_PARAMETER) {
        this.mapLeaflet = mapLeaflet;
        this.map = this.mapLeaflet.map;
        this.CONST_PARAMETER = CONST_PARAMETER;
        this.geoJson = null;

        this.colorRange = document.querySelector('#color_intensity');

        this.layers = this.addLayers();
        this.events();
    }

    events(){
        this.colorRange.addEventListener('change', this.updateVisualization.bind(this));
    }

    addLayers() {
        let layers = {
            grid: null,
        };

        let geoJsons = {
            grid: '/public/GeoJson/milano-grid_all_traffic.geojson',
        };

        let clickFunctions = {
            grid: (e) => {},
        };

        let tooltipFunctions = {
            grid: (layer) => {
                let cell_id = layer.feature.properties.cellId;
                let traffic = layer.feature.properties.traffic.toFixed(3);
                return `The cell_id is: ${cell_id} and the traffic is ${traffic}`;
            },
        };

        let styles = {
            // grid: this.CONST_PARAMETER.DEFAULT_STYLE
            grid: (feature)=>{
                let value = feature.properties.traffic;
                let intensity = this.colorRange.value;
                return {
                    color: this.CONST_PARAMETER.GET_COLOR(intensity*value),
                    fillColor: this.CONST_PARAMETER.GET_COLOR(intensity*value),
                    fillOpacity: .55,
                    opacity: 0
                };
            },
        };

        for (let layer in layers) {
            if (!layers.hasOwnProperty(layer))
                continue;

            let layerUrl = geoJsons[layer];
            axios.get(layerUrl).then((response) => {

                this.geoJson = response.data;

                layers[layer] = new Leaflet.FeatureGroup();

                this.geoJson["features"].forEach((feature) => {

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

                this.layers = layers;

            }).catch((error) => {
                console.log(error);
            });

        }


    }

    updateVisualization(){
        let intensity = this.colorRange.value;

        for (let key in this.layers.grid._layers) {
            if (this.layers.grid._layers.hasOwnProperty(key)) {

                let cell = this.layers.grid._layers[key];
                let cell_id = cell._layers[key - 1].feature.properties.cellId;

                if (this.geoJson['features'].hasOwnProperty(cell_id)) {

                    let value = this.geoJson['features'][cell_id].properties.traffic;

                    cell.setStyle({
                        color: this.CONST_PARAMETER.GET_COLOR(intensity * value),
                        fillColor: this.CONST_PARAMETER.GET_COLOR(intensity * value),
                        fillOpacity: .65,
                        opacity: 0
                    });
                }

            }
        }
    }
}

export default Grid;