import Mn from 'backbone.marionette'
import MenuTemplate from './template/menu.hbs'

export class MenuView extends Mn.View{
    constructor(){
        super({
            className: 'menu_container_view',
            template: MenuTemplate,
            triggers: {
                'click .about_menu': 'openAbout',
                'click .map_menu': 'openMap'
            }
        })
    }
}