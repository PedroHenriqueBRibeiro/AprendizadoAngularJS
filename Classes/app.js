class Pessoa{
constructor(nome="Carlos", endereco="Rua Santa Rita"){
  this.nome = nome
  this.endereco = endereco
}
exibirRegistro(){
  console.log(`O nome informado é: ${this.nome}. Seu endereço: ${this.endereco}`)
}
}
class PessoaFisica extends Pessoa{
  constructor(nome="Bia", endereco="Rua Santa Monica", sexo="feminino"){
    super(nome, endereco)
    this.sexo = sexo
  }
dadosCompleto(){
    console.log(`O nome informado ${this.nome}. Seu endereço é: ${this.endereco}, e seu sexo é ${this.sexo}.`)
  


// const pessoa = new Pessoa("Joana", "Rua do Ouro")
// pessoa.exibirRegistro()

const PessoaFisica = new PessoaFisica("Valéria", "Rua do Rio Doce", "feminino")
PessoaFisica.dadosCompleto()
}
}