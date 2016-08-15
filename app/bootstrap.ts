import 'angular';
import 'angular-material';
import 'angular-material/angular-material.scss';
import './utility/string-extensions';
import { module } from './app-module';



//require typescript files
let requireContext = require.context('./', true, /\.ts$/);
requireContext.keys().forEach(requireContext);

//bootstrap root application
angular.bootstrap(document, [ module.name ], {strictDi: true});