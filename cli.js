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
	console.error('Specify a bundle ID');
	process.exit(1);
}

(async () => {
	console.log(await bundleName(cli.input[0]));
})();
