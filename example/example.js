const Markus = require('../dist/index').default;
const fs = require('fs');

const buffers = []
for (let i = 10; i < 50; i++) {
    buffers.push(fs.readFileSync('../../../test/IMG_31' + i + '.JPG'));
}

const a = new Markus('http://localhost:8080');
a.UploadMultipleBuffer(buffers, 'echo', 'jpg', ['star'], (count) => {
    console.log(count);
}, 'test').then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
});