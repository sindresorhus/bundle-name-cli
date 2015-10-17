#!/usr/bin/env node
'use strict';
const meow = require('meow');
const bundleName = require('bundle-name');

const cli = meow(`
	Usage
	  $ bundle-name <bundle-id>

	Example
	  $ bundle-name com.apple.Safari
	  Safari
`);

if (!cli.input[0]) {
	console.error('Bundle ID required');
	process.exit(1);
}

bundleName(cli.input[0]).then(console.log);
