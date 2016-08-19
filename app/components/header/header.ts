import {Component} from '../../annotations';  

@Component({
    selector: 'header',
    template: require('./header.html'),
    style: require('./header.scss')
})
export class HeaderComponent {
    public image = require("./santaLogo.png");
}

