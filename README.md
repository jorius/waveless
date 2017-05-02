# waveless

This is a npm package to convert the simple and boring debug in node js (or javascript in general) to a fun and useful log, then, this:

![boring](http://i.imgur.com/L3qyUuW.png)

become to this:

![cool](http://i.imgur.com/bbj63p7.png)

# Usage

```javascript
var waveless = require('waveless');

waveless.log('I am a log');
waveless.info('I am some info');
waveless.warning('prision break!');
waveless.error('[] != []');
waveless.danger('Robot rock');

// Also you can pass a second argument to say to all the methods that the first argument should be handled as an object

waveless.log([], true);
waveless.log({"foo": "bar"}, true);
waveless.log("string", true);
waveless.log(true, true);

// The result from above will be like the image below

```

![objects](http://i.imgur.com/iaBf6kc.png)
