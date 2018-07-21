# Markus-SDK-Node - API

## Upload multiple pictures by Buffers

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
a.UploadMultipleBuffer(buffers, prefix, extName, tags, key).then((result)=>{
    // Result will be like
    // [{
    //     original: 'OriginalName1',
    //     id: 'id1',
    // },{
    //     original: 'OriginalName2',
    //     id: 'id2',
    // },{
    //     original: 'OriginalName3',
    //     id: 'id3',
    // }]
}).catch((err)=>{
    // Return Error
});
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
a.UploadSingleBuffer(buffer, original, tags, key).then((result)=>{
    // Result will be like
    // {
    //     original: 'OriginalName',
    //     id: 'id',
    // }
}).catch((err)=>{
    // Return Error
});
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
