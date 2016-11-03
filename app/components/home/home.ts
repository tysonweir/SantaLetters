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
    public productOne= require("./example1.jpg");    
    public productTwo= require("./example2.png");    
    public productThree= require("./example3.png");
    public slAbout= require("./christmas1.jpg");    
    public slShopNow= require("./christmas2.jpg");                        
    public stringhere: string = 'here I am';
}

