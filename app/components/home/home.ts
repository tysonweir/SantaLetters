import {Component} from '../../annotations';
export const MODULE_NAME = 'home';

angular.module(MODULE_NAME,[]);


@Component({
    selector: MODULE_NAME + 'Page',
    template: require('./home.html'),
    style: require('./home.scss')
})
export class HomeComponent {
    // array1 = ["cat","hat","bat"];
    // array2 = ["ball", "cat"];
    // array3 = [];

    // getMatch() {
    //     this.array3 = [];
        
    //     for (var i = 0; i < this.array1.length; i++) {
    //         for (var e = 0; e < this.array2.length; e++) {
    //             if (this.array1[i] === this.array2[e]) this.array3.push(this.array1[i]);
    //         }
    //     }
    // }
}

