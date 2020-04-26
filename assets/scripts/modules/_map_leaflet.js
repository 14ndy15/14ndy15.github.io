import Leaflet from 'leaflet';
import axios from "axios";

class MapLeaflet{
    constructor(logger, CONST_PARAMETER){

        this.CONST_PARAMETER = CONST_PARAMETER;
        this.logger = logger;
        this.map = Leaflet.map('map', {maxZoom: 18}).setView([45.4654219 ,9.1859243], 13);

        let layer = new Leaflet.TileLayer('https://api.mapbox.com/styles/v1/kuba-reisen/ck9gamqaj4abv1ipb5lfxa94h/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia3ViYS1yZWlzZW4iLCJhIjoiY2p5NjNkMjRhMGU3bDNkc3l1OWI3OXl0byJ9.m5V748nSYU5KWdQ8MchSSQ',
            {
                attribution: 'Mapbox'
            });

        this.map.addLayer(layer);

        this.layers = [];
    }

    addLayer(layer, name){
        this.layers[name] = layer;
        this.layers[name].addTo(this.map);
    }
}

export default MapLeaflet;