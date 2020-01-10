module.exports = function routes(app) {

    function qwerty (a,b,c,callback){
    let z = a+b+c; 
      setTimeout(function(){
        z = z + 1000
        callback (z)  
      }, 3999)
    }
     
    app.get('/Time/:a/:b/:c/', require('./controllers/time').leg)
    
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
    
    }