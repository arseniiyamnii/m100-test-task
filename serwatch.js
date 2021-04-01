const concurrently = require('concurrently');
concurrently(['gulp watcher', 'node ./design-server.js'])
