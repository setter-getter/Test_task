import Mn from 'backbone.marionette'
import AboutTemplate from './template/about.hbs'

export class AboutView extends Mn.View{
    constructor(){
        super({
            className: 'about_view',
            template: AboutTemplate,
        });
    }
}