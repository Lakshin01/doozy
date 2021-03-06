const app = require('./app');
const mongoose = require('mongoose');
const config = require('./config');
const path=require("path");
const connect = url => {
  return mongoose.connect(url, config.db.options);
};

if(process.env.NODE_ENV=== 'production'){
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}



if (require.main === module) {
  app.listen(config.port);
  connect(config.db.prod);
  mongoose.connection.on('error', console.log);
}

module.exports = { connect };
