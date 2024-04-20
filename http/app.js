const http = require("http")
http.createServer(function(req, res){
  res.end("<button>teste </button>")
}).listen(8082)

console.log(`Servidor rodando`)