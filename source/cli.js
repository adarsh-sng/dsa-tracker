#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
		Usage
		  $ dsastat
	`,
	{
		importMeta: import.meta,
	},
);
const enterAltScreenCommand = '\x1b[2J\x1b[0f';
process.stdout.write(enterAltScreenCommand);
render(<App />);
