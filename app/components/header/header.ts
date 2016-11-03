import {Component} from '../../annotations';  

@Component({
    selector: 'header',
    template: require('./header.html'),
    style: require('./_header.scss')
})
export class HeaderComponent {
    public logoImage = require("./santaLogo.png");
    public headerImage= require("./headerImage.png");    
}

