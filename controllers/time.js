module.exports = {
    tailo: function (req, res) {
        let {a,b,c} =req.params;
        qwerty (a,b,c,function(d){
          res.send('Time '+d)
        })
      },
      leg: function (req, res) {
        let {a,b,c} =req.params;
        qwerty (a,b,c,function(d){
          res.send('Time '+d)
        })
      }
}