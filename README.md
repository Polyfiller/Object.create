# Object.create fix for IE9-11

This fixes the bug: [All IE Objects Are Kinda Broken](webreflection.blogspot.com/2014/04/all-ie-objects-are-broken.html)

This is designed to be run in a browser and it depends on there being a document. It does not work in a Node.js or worker environment.

To use the Object.create fix, just drop a single JavaScript file into your page:
```html
<script src="index.js"></script>
```
or load as the Node.js module:
```javascript
require('object.create');
```

Download the [latest Object.create fix from GitHub](https://raw.githubusercontent.com/Polyfiller/Object.create/master/index.js).

**npm**
```
npm install object.create
```
**Bower**
```
bower install object.create
```

## License

The Object.create fix is released under the [MIT license](https://github.com/Polyfiller/Object.create/blob/master/LICENSE).
