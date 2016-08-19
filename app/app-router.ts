import {MODULE_NAME as about} from './components/about/about';
import {MODULE_NAME as home} from './components/home/home';
import {MODULE_NAME as products} from './components/products/products';
import {MODULE_NAME as letters} from './components/letter-layouts/letter-layouts';


angular.module('app')
.config(['$stateProvider',($stateProvider):void => {
    $stateProvider
      .state(home, {
        url: '/',
        template: require('./components/home/home.html')
      })
      .state(about,{
        url:'/about',
        template: require('./components/about/about.html')
      })
      .state(products,{
        url:'/products',
        template: require('./components/products/products.html')
      })
      .state(letters,{
        url:'/letters',
        template: require('./components/letter-layouts/letter-layouts.html')
      })
}]) 
