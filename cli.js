#!/usr/bin/env node
'use strict';
const meow = require('meow');
const isCharging = require('is-charging');

meow(`
	Usage
	  $ is-charging
`);

isCharging().then(console.log);
