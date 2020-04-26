import MapLeaflet from './modules/_map_leaflet';
import Grid from "./modules/_grid";

const CONST_PARAMETER = {
    DEFAULT_STYLE: {
        fillColor: 'transparent',
        weight: 1,
        opacity: 1,
        color: '#999',
        dashArray: '0',
        fillOpacity: 0
    },
    TRANSPARENT_STYLE: {
        fillColor: 'transparent',
        weight: 0,
        opacity: 0,
        color: 'transparent',
        dashArray: '2',
        fillOpacity: 0
    },
    GET_COLOR: function getColor(value) {
        value = Math.floor(value);
        if (value === 0)
            return 'transparent';
        if (value < 256) {
            return '#FFFF' + (Math.trunc(256 - value) < 16 ? '0' : '') + (256 - value).toString(16);
        } else if (value < 256 * 256) {
            return '#FF' + (Math.trunc(256 - value / 256) < 16 ? '0' : '')
                + (256 - Math.trunc(value / 256)).toString(16) + '00';
        } else if (Math.trunc(value / (256 * 256)) > 255)
            return '#000000';
        return '#' + (256 - Math.trunc(value / (256 * 256)) < 16 ? '0' : '') + (256 - Math.trunc(value / (256 * 256))).toString(16) + '0000';
    }
};

let mapLeaflet = new MapLeaflet(CONST_PARAMETER);
new Grid(mapLeaflet, CONST_PARAMETER);