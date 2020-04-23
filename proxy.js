const proxy = require('redbird')({port: 80});

proxy.register(`${process.env.VIRTUAL_HOST}/test`, 'localhost:3000');
