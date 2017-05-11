#!/usr/bin/env node

'use strict';

global.Promise = require('bluebird')


const http = require('http');
const fs = require('fs');
const path = require('path');
const utils = require('../src/utils');

const args = utils.parseArg();
const config = global.config = require('../src/config')(args);


console.info('https 端口：'+config.httpsSite.port);

var app = require('../src/app');
app.listen(config.site.port);
