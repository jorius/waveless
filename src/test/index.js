/* eslint-disable no-self-compare */

const waveless = require('../../index')({
    timestampFormat: 'HH:mm:ss',
    indentSpaces: 2
});

waveless.log('I am a log');
waveless.info([], true);
waveless.log([{ foo: 'bar' }, 0, 1, 'Hello', 'World'], true);
waveless.log({ foo: 'bar', bar: 'foo' }, true);
waveless.warning('1 != 2');
waveless.error([] === [], true);
waveless.danger('Prision break!');
