const Markus = require('../dist/index').default;
const fs = require('fs');
const a = new Markus('http://localhost:8080');
a.UploadSingleBuffer(buffer);