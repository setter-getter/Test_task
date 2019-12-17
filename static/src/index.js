import Mn from 'backbone.marionette'
import { View_ } from './main/index.js'
import './style.styl'

class App extends Mn.Application{
    onStart() {
        this.showView(new View_())
    }
}

window.app = new App({region: '#main'});

$(() => {
    window.app.start();
});