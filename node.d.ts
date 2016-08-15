declare let require: {
	(module: string): string;
	context(directory: string, useSubdirectories: boolean, pattern: RegExp): {
		(module: string): void;
		keys(): string[];
	};
};

declare var process: {
	env: { NODE_ENV: string; };
};