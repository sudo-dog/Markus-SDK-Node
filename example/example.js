const Markus = require('../dist/index').default;
const fs = require('fs');

const buffers = []
for (let i = 10; i < 99; i++) {
    buffers.push(fs.readFileSync('../../../test/IMG_31' + i + '.JPG'));
}

a.UploadMultipleBuffer(buffers);