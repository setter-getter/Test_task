import Mn from 'backbone.marionette'
import MapTemplate from './template/map.hbs'
import L from 'leaflet/dist/leaflet'
import {PointsView} from './points/index'


export class MapView extends Mn.View {
    constructor() {
        super({
            className: 'map_view',
            template: MapTemplate,
            regions: {
                side_bar_container: ".side_bar"
            }
        });
    }

    onAttach() {
        window.map = L.map('map').setView([47.240117, 39.710657], 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        this.showChildView('side_bar_container', new PointsView())

    }
}

