(function (Prism) {
	Prism.languages.kodef = Prism.languages.extend('kotlin', {
		
	});

	Prism.languages.kodef["class-name"] = {
		pattern: /(?:`[^\r\n`]+`|\b[\w\.]+)(?=\s*[\#\<])/,
		greedy: true
	}
	Prism.languages.kodef.generic = {
		pattern: /(?<=<)\w+(?=>)/,
		greedy: true
	},
	Prism.languages.kodef.parameter = {
		pattern: /(?<=(: |:))\w+/,
		greedy: true
	}

	Prism.languages.kd = Prism.languages.kodef;
}(Prism));