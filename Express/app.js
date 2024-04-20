const express = require(`express`)
const port = 8082
const app = express()
const handlebars = require("express-handlebars")
const nome ="Pedro"
const sobrenome ="Henrique"
const idade =22
const profissao = "estudante"
const materias = ["css", "html", "javaScript"]



app.get("/dados", function(req,res){
  res.send(`dados`, {nome, sobrenome, profissao, idade, materia})
})

app.engine(`handlebars`, handlebars.engine({defaultlayout:`main`}))





app.get("/", function(req,res){
res.send("Minha página")
})




app.listen(port, function(){
  console.log(`O servidor está rodando no local ${port}.`)
})
