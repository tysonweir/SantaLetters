import {MODULE_NAME as about} from './components/about/about';
import {MODULE_NAME as home} from './components/home/home';
import {MODULE_NAME as products} from './components/products/products';
import {MODULE_NAME as letters} from './components/letter-layouts/letter-layouts';


angular.module('app', ['ngComponentRouter', home, about, products, letters])

.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
})

.value('$routerRootComponent', 'app')

.component('app', {
    template: 'app.html'
});