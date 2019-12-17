import Mn from 'backbone.marionette'
import Bb from "backbone"
import TemplatePoint from './template/point.hbs'
import _ from 'underscore'
import L from "leaflet/dist/leaflet";


export class PointsView extends Mn.CollectionView {
    constructor() {
        super({
            className: 'points_view',
            template: false,
            collection: new Points(),
            childView: PointView
        })
    }
}

class Points extends Bb.Collection {
    constructor() {
        super([
            {
                id: 1,
                name: 'Парк ДГТУ',
                description: "Студенческий парк ДГТУ",
                coordinates: [47.240068, 39.710662],
                icon_marker: park_icon,
            },
            {
                id: 2,
                name: 'Манеж',
                description: "Легко-атлетический манеж",
                coordinates: [47.2409, 39.709364],
                icon_marker: arena_icon,
            },
            {
                id: 3,
                name: 'Детская площадка',
                description: "Детские игровые залы и площадки",
                coordinates: [47.239792, 39.711206],
                icon_marker: playground_icon,
            },
            {
                id: 4,
                name: 'Татьянинская церковь',
                description: "Храм святой мученицы Татианы при ДГТУ",
                coordinates: [47.239301, 39.711034],
                icon_marker: church_icon,
            },
            {
                id: 5,
                name: 'Бассейн',
                description: "Бассейн ДГТУ",
                coordinates: [47.238769, 39.710885],
                icon_marker: swim_icon,
            },
            {
                id: 6,
                name: 'Памятник',
                description: "Памятник студентам и преподавателям Рисхма, погившим в годы ВОВ",
                coordinates: [47.239325, 39.710395],
                icon_marker: memorial_icon,
            }
        ]);
    }
}

class PointView extends Mn.View {
    constructor(props) {
        _.defaults(props, {
                className: "view_point",
                template: TemplatePoint,
                events: {
                    "click": "goToPoint"
                }
            }
        );
        super(props);
    }

    goToPoint() {
        this.marker.openPopup();
        window.map.setView(this.model.get('coordinates'), 17);
    }

    onRender() {
        this.marker = L.marker(this.model.get('coordinates'), {icon: this.model.get('icon_marker')}).addTo(map);
        this.marker.bindPopup(`<b>${this.model.get('description')}</b>`)
    }

    templateContext() {
        return {
            pointName: this.model.get('name'),
            pointDescription: this.model.get('description')
        }
    }
}

let park_icon = L.icon({
    iconUrl: 'images/park.png',
    iconSize: [65, 75],
    iconAnchor: [22, 65],
    popupAnchor: [2, -62]
});

let arena_icon = L.icon({
    iconUrl: 'images/manezh.png',
    iconSize: [65, 75],
    iconAnchor: [22, 65],
    popupAnchor: [15, -56]
});

let church_icon = L.icon({
    iconUrl: 'images/church.png',
    iconSize: [65, 75],
    iconAnchor: [22, 50],
    popupAnchor: [9, -46]
});

let playground_icon = L.icon({
    iconUrl: 'images/kacheli.png',
    iconSize: [65, 75],
    iconAnchor: [22, 55],
    popupAnchor: [9, -36]
});

let swim_icon = L.icon({
    iconUrl: 'images/swim.png',
    iconSize: [65, 75],
    iconAnchor: [22, 50],
    popupAnchor: [3, -20]
});

let memorial_icon = L.icon({
    iconUrl: 'images/memorial.png',
    iconSize: [65, 75],
    iconAnchor: [22, 50],
    popupAnchor: [9, -43]
});






