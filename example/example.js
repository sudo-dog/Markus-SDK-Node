const Markus = require('../dist/index').default;
const fs = require('fs');

const buffers = []
for (let i = 36; i < 99; i++) {
    buffers.push(fs.readFileSync('../../../test/IMG_30' + i + '.JPG'));
}

const a = new Markus('http://localhost:8080');
a.UploadMultipleBuffer(buffers);