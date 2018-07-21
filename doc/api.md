# Markus-SDK-Node - API

## Upload multiple picture by Buffers

### Example

```js
const Markus = require('markus-sdk-node').default;
const fs = require('fs');

const buffers = []
buffers.push(fs.readFileSync('PATH1'));
buffers.push(fs.readFileSync('PATH2'));
buffers.push(fs.readFileSync('PATH3'));
buffers.push(fs.readFileSync('PATH4'));
buffers.push(fs.readFileSync('PATH5'));
buffers.push(fs.readFileSync('PATH6'));

const a = new Markus('http://domain.com');
a.UploadMultipleBuffer(buffers, prefix, extName, tags, key);
```

### Description

Markus accept a domain name in constructor

Use UploadMultipleBuffer within arguments below

-   Buffers
    -   Your buffers
-   Prefix
    -   Original filename prefix
-   ExtName
    -   Original file extension name
-   Tags
    -   Tags array
-   Key
    -   Optional, your Markus validation key, if you are using it

Original name will be like `Prefix0.jpg`, `Prefix1.jpg` as your input

## Upload Single picture by Buffer

### Example

```js
const Markus = require('markus-sdk-node').default;
const fs = require('fs');

const buffer = fs.readFileSync('PATH1')

const a = new Markus('http://domain.com');
a.UploadSingleBuffer(buffer, original, tags, key);
```

### Description

Similar as above

-   Buffer
    -   Your buffer
-   Original
    -   File original name
-   Tags
    -   Tags array
-   Key
    -   Optional, your Markus validation key, if you are using it
