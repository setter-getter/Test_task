import Mn from 'backbone.marionette'
import ContentTemplate from './template/content.hbs'
import { AboutView } from "../about";
import { MapView } from "../map";

export class ContentView extends Mn.View{
    constructor(){
        super({
            className: 'content_container_view',
            template: ContentTemplate,
            regions: {
                content: '.content'
            }
        });
        this._views = {
            'about': AboutView,
            'map': MapView
        }
    }

    openView(choice){
        let _class = this._views[choice];
        this.showChildView('content', new _class())
    }
}
