import 'angular';
import 'angular-mocks';
import './utility/string-extensions';

//require typescript files
let requireContext = require.context('./', true, /\.ts$/);
requireContext.keys().forEach(requireContext);
