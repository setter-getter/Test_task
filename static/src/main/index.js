import Mn from 'backbone.marionette'
import ViewTemplate from './template/main.hbs'
import { MenuView } from '../menu/index.js'
import { ContentView } from '../content/index.js'

export class View_ extends Mn.View{
    constructor(){
        super({
            className: 'container_view',
            template: ViewTemplate,
            regions: {
                menu: '.menu_container',
                content: '.content_container'
            },
            childViewTriggers: {
                'openAbout': 'showAbout',
                'openMap': 'showMap'
            }
        })
    }

    onRender(){
        this.showChildView('menu', new MenuView());
        this.showChildView('content', new ContentView());
    }

    onShowAbout(){
        let _view = this.getChildView('content');
        _view.openView('about')
    }

    onShowMap(){
        let _view = this.getChildView('content');
        _view.openView('map')
    }
}