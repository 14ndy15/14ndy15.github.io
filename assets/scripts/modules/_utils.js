import axios from "axios";
import Leaflet from "leaflet";

export function makeLayers(layers, geoJsons, styles, clickFunctions, tooltipFunctions){

    for (let layer in layers) {
        if (!layers.hasOwnProperty(layer))
            continue;

        let layerUrl = geoJsons[layer];

        axios.get(layerUrl).then((response)=>{

            let data = response.data;

            layers[layer] = new Leaflet.FeatureGroup();

            data["features"].forEach((feature) => {

                let region = Leaflet.geoJSON(feature, {
                    style: styles[layer],
                    onEachFeature: (_feature, _layer) =>{
                        _layer.on({
                            click: clickFunctions[layer],
                        }).bindTooltip(tooltipFunctions[layer]).openTooltip();

                    },
                });


                layers[layer].addLayer(region);
            });

        }).catch((error)=>{
            console.log(error);
        });

    }

    return layers;
}