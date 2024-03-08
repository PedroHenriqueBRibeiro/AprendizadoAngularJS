const servidor = require('express')

const app = servidor()
app.get("/home", function(req,res){
res.send("<button>asdfasf</button>")
})
app.listen(5000, function(req,res){
 
})

