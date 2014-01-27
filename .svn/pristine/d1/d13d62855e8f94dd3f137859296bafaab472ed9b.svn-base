module.exports = {
  port: process.env.APP_PORT,
  hostname: '180.149.131.99',
  douban: {
    key: '',
    secret: ''
  },
  douban_more: [],
  memcached: {
    hosts: '180.149.131.99:'+process.env.APP_PORT,
    options: {
      retries: 2
    }
  },
  mongo: {
    host: '180.149.131.99',
    port: process.env.APP_PORT,
    dbname: 'weixin-event',
  },
  users: {
    admin: {
      passwd: 'admin'
    }
  },
  site_root: 'http://180.149.131.99/',
  salt: 'hirobot',
  mixpanel: 'keyboardcat',
  weixin: 'keyboardcat123'
};

var environ = process.env.NODE_ENV || 'development';

if (process.env.BAE_ENV_ADDR_MONGO_IP) {
  environ = 'bae';
}

try {
  var localConf = require('./' + environ);
  for (var i in localConf) {
    module.exports[i] = localConf[i];
  }
} catch (e) {}
