import {Component} from '../../annotations';
export const MODULE_NAME = 'home';

angular.module(MODULE_NAME,[]);


@Component({
    selector: MODULE_NAME + 'Page',
    template: require('./home.html'),
    style: require('./_home.scss')
})
export class HomeComponent {
    public heroImage= require("./heroImage.png");
    public stringhere: string = 'here I am';
}

