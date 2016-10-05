import {Component} from '../../annotations';
export const MODULE_NAME = 'about';

angular.module(MODULE_NAME, []);


@Component({
    selector: MODULE_NAME + 'Page',
    template: require('./about.html'),
    style: require('./_about.scss')
})
export class AboutComponent {
    public slAboutChristmas1= require("./aboutChristmas1.jpg");   
    public slAboutChristmas2= require("./aboutChristmas2.jpg");   
    public slAboutChristmas3= require("./aboutChristmas3.jpg");   
}