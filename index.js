const express = require('express')
const app = express()

var options = {
  setHeaders: function (res, path, stat) {
    res.set('content-type', 'application/javascript')
  }
}
app.use('/index.png', express.static('./build/index.png', options))
app.use('/', express.static('./build/'))

function qwerty (a,b,c,callback){
let z = a+b+c;
  setTimeout(function(){
    z = z + 1000
    callback (z)  
  }, 3999)
}
app.get('/Time/:a/:b/:c/', function (req, res) {
  let {a,b,c} =req.params;
  qwerty (a,b,c,function(d){
    res.send('Time '+d)
  })
})

.get('/Tom.jpg', function (req, res) {
  res.send('Time ')
})


.get('/hello/:age/', function (req, res) {
    let name=req.params.age
    let name2=req.params.age2
    let name3=req.params.age3
    let time=new Date()
    res.send('Hello '+time)
  })

.get('/brend/:brend/', function (req, res) {
    let name=req.params.brend
    res.send('Hello '+name.length)
  })

.get('/Time/', function (req, res) {
    let time=new Date()
    res.send('Time '+time)
  })



app.listen(3000)


function double(a){
    if(Number.isInteger(a)) {
      return a * 2
    } else {
      throw 'Не число'
    }

}