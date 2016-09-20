import {Component} from '../../annotations';
export const MODULE_NAME = 'letter-layouts';

angular.module(MODULE_NAME, []);

@Component({
    selector: MODULE_NAME + 'Page',
    template: require('./letter-layouts.html'),
    style: require('./_letter-layouts.scss')
})
export class LetterLayoutComponent {

}