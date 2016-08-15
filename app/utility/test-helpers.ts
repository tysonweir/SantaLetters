export function getComponent<TComponent>(selector: string, bindings: {}): TComponent {
	let component: TComponent;

	angular.mock.inject(($rootScope: ng.IRootScopeService, $componentController: ng.IComponentControllerService) => {
		component = $componentController<TComponent, any>(
			selector.toCamelCase(),
			{ $scope: $rootScope.$new() },
			bindings
		);
	});

	return component;
}

export function getDirective<TDirective>(selector: string, template: string): TDirective {
	let directive: TDirective;

	angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
		let element = angular.element(template);
		$compile(element)($rootScope.$new());
		directive = element.controller(selector.toCamelCase());
	});

	return directive;
}

export function getService<TService>(name: string): TService {
	let service: TService;

	angular.mock.inject(($injector: ng.auto.IInjectorService) => {
		service = $injector.get<TService>(name);
	});

	return service;
}

export function getPipe(name: string): any {
	return getService<any>(`${name}Filter`);
}
