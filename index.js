const express = require('express')
const app = express()

var options = {
  setHeaders: function (res, path, stat) {
    res.set('content-type', 'application/javascript')
  }
}
app.use('/index.png', express.static('./build/index.png', options))
app.use('/', express.static('./build/'))

const routes = require('./router');
const mysqlManager = require('./managers/mysql')
routes(app) 

mysqlManager()

app.listen(3000 , () => {
  console.log('DEBUG:index.js:19 ');
})


function double(a){
    if(Number.isInteger(a)) {
      return a * 2
    } else {
      throw 'Не число'
    }

}

