/*
	Component Annotation (Class Decorator)
	Registers an angular component.

	Example:
	@Component({module: module, selector: 'my-component', template: 'template'})
	export class MyComponent { ... }

	Result:
	module.component('myComponent', {
		controller: MyComponent ,
		bindings: MyComponent.bindings ,
		template: 'template'
	});
*/

export interface IComponentOptions {
	module?: ng.IModule;
	selector: string;
	template?: string;
	templateUrl?: string;
	style?: string; //doesn't actually do anything, use it with a webpack require for grouping purposes
	require?: {[controller: string]: string};
	transclude?: boolean | {[slot: string]: string};
}

export function Component(options: IComponentOptions): ClassDecorator {
	return (target: any): void => {
		//create component definition
		let component: ng.IComponentOptions = {
			controller: target,
			bindings: target.bindings,
			template: options.template,
			templateUrl: options.templateUrl,
			require: options.require,
			transclude: options.transclude || true
		};

		//register component
		angular.module('app').component(options.selector.toCamelCase(), component);
	//	options.module.component(options.selector.toCamelCase(), component);
	}
}
