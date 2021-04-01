let nome = []
let idade = []
let altura = []
let peso = []
let imc = []

let alunos = [45]
let soma = 0.0
for(let i = 0; i <= 45; i++) {
    nome[i] = prompt("Qual o seu nome?")
    idade[i] = prompt("Qual a sua idade?")
    altura[i] = prompt("Qual a sua altura? (em metros)")
    peso[i] = prompt("Qual o seu peso? (em kilogramas)")

    imc[i] = peso[i]/(altura[i] * altura[i])
    
    soma += altura[i]

    document.write(imc[i] +" | ")
}

let maior = Math.max(...imc)
document.write("O maior IMC é " +maior +" | ")

let menor = Math.min(...imc)
document.write("O menor IMC é " +menor +" | ")

let media = soma / alunos.length
document.write("A média de alturas é " +media)





