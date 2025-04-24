const logger = require('node-color-log');
let message = 'Hello, World!';


logger.color('red').bgColor('blue')
      .bold().italic().dim().reverse().underscore().strikethrough()
      .log(message);