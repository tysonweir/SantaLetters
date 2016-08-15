/*
	Service Annotation (Class Decorator)
	Registers an angular service.

	Example:
	@Service({module: module, name: 'someService'})
	export class SomeService { ... }

	Result:
	module.service('someService', SomeService);
*/

export interface IServiceOptions {
	module: ng.IModule;
	name: string;
}

export function Service(options: IServiceOptions): ClassDecorator {
	return (target: any): void => {
		options.module.service(options.name, target);
	}
}