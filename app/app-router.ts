import {MODULE_NAME as about} from './components/about/about';
import {MODULE_NAME as home} from './components/home/home';
import {MODULE_NAME as products} from './components/products/products';
import {MODULE_NAME as letters} from './components/letter-layouts/letter-layouts';


angular.module('app')
.config(['$stateProvider',($stateProvider:angular.ui.IStateProvider):void => {
    $stateProvider
      .state(home, {
        url: '/',
        templateUrl: './components/home/home.html'
      })
      .state(about,{
        url:'/about',
        templateUrl: './components/about/about.html'
      })
      .state(products,{
        url:'/products',
        templateUrl: './components/products/products.html'
      })
      .state(letters,{
        url:'/letters',
        templateUrl: './components/letter-layouts/letter-layouts.html'
      })
}]) 
