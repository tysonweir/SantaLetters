import {Component} from '../../annotations';
export const MODULE_NAME = 'products';

angular.module(MODULE_NAME, []);


@Component({
    selector: MODULE_NAME + 'Page',
    template: require('./products.html'),
    style: require('./products.scss')
})
export class ProductComponent {

}