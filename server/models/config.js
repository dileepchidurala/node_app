var Teradata = require('node-teradata');

var config = {
  url: 'jdbc:teradata://10.25.190.23/tmode=ANSI,charset=UTF8',
  username: 'nodeapp',
  password: '********',
  driver: './jars/',
  minPoolSize: 1,
  maxPoolSize: 100,
  keepalive: {
    interval: 60000,
    query: 'SELECT 1',
    enabled: true
  }
};

var teradata = new Teradata(config);

module.exports.teradata = teradata;
module.exports.db_name = 'student';
