# Waveless

This is a npm package to convert the simple and boring console debug in node js to a fun and useful console, then, this:

![boring](https://imgur.com/Xtp3xhA.png)

become to this:

![cool](https://imgur.com/GH3BSp7.png)

# Usage

```javascript
const waveless = require('waveless')();

waveless.log('I am a log');
waveless.info('I am some info');
waveless.warning('prision break!');
waveless.error('[] != []');
waveless.danger('Robot rock');

// You can also pass a second argument called showAsObject
// for the first argument (data to print in console) show as an object and its type

waveless.log([], true);
waveless.log({"foo": "bar"}, true);
waveless.log("string", true);
waveless.log(true, true);

// The result from above will be like the image below

```

![objects](https://imgur.com/PvzxEyq.png)



# Options
The constructor has an argument called options which is an object with the following defaults

| Option          | Default Value         | Description                                                   |
| --------------- | --------------------- | ------------------------------------------------------------- |
| writeInFile     | false                 | A boolean option to write all the logs into a file specified. |
| timestampFormat | DD-MM-YYYY HH:mm:ss   | A [momentjs](https://momentjs.com/) date format string.       |
| filePath        | null                  | The absolute file path to write all the logs.                 |
| indentSpaces    | 4                     | The indent spaces of the log start.                           |

```javascript
const waveless = require('waveless')({
    writeInFile: true,
    filePath: './logs/waveless/log',
    timestampFormat: 'HH:mm:ss' // display on the console and write into the file only the time
});
```

There is also a method called `setOptions(options)` which receives the same options as the constructor.

# Note
If you set the options in the constructor and then you call the `setOptions(options)` method the options given in the constructor will be overwritten by the options given in the `setOptions(options)` method

# Example of log file

```log
13-01-2019 18:35:59 | log | "I am a log" | 0.242ms
13-01-2019 18:35:59 | info | "I am some info" | 0.002ms
13-01-2019 18:35:59 | error | "[] != []" | 0.002ms
13-01-2019 18:35:59 | warning | "prision break!" | 0.002ms
13-01-2019 18:35:59 | danger | "Robot rock" | 0.002ms
13-01-2019 18:38:50 | log | [] | 0.244ms
13-01-2019 18:38:50 | log | {
  "foo": "bar"
} | 0.002ms
13-01-2019 18:38:50 | log | "string" | 0.002ms
13-01-2019 18:38:50 | log | true | 0.002ms
```
