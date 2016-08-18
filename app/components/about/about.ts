import {Component} from '../../annotations';
export const MODULE_NAME = 'about';

angular.module(MODULE_NAME, []);


@Component({
    selector: MODULE_NAME + 'Page',
    template: require('./about.html'),
    style: require('./about.scss')
})
export class AboutComponent {

}