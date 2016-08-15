/*
	Pipe Annotation (Class Decorator)
	Registers an angular filter.

	Example:
	@Pipe({module: module, name: 'somePipe'})
	export class SomePipe { ... }

	Result:
	module.filter('somePipe', PipeFactory);
*/

export interface IPipeOptions {
	module: ng.IModule;
	name: string;
}

export function Pipe(options: IPipeOptions): ClassDecorator {
	return (target: any): void => {
		//create factory
		let factory = (...dependencies): Function => {
			let pipe = new target(...dependencies);
			return (input, ...parameters) => pipe.transform(input, ...parameters);
		};
		factory.$inject = target.$inject;

		//register filter
		options.module.filter(options.name, factory);
	}
}