/*
Interpretação de código
=======================

(1)
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

====================
(a)

o primeiro console log irá imprimir 10, e o segundo 50

===================
(b) 
as funções seriam invocadas, mas não apareceria nada no console.

===================
(2)

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

=====================
(a)

A função informa se a frase inserida contém 
a palavra "cenoura", pode ser útil para verificação 
de palavras em senhas ou bancos de dados.

=====================
(b)

I - True
II - True
III - True

todas são true porque a entrada ".includes()" 
busca a palavra dentro da string, independente da 
palavra estar com outras letras junto

=======================

Exercícios de escrita de código

======================
(1)
*/

const informaçoes = (frase) => {
	const nome = "Páblo"
	const idade = 24
	const cidade = "São leopoldo"
	const profissao = "Eletrotécnico"
	console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}`)
}

informaçoes()

/*
========================
(2)
*/

// (a) soma

const resultado1 = (numero1, numero2) =>{
	soma = numero1 + numero2
	return soma
}

console.log(resultado1(2, 4))

// (b) maior ou igual

const resultado2 = (numero1, numero2) =>{
	maiorIgual = numero1 >= numero2
	return maiorIgual
}

console.log(resultado2(3, 9))

// (c) par ou não

const resultado3 = (numero1) => {
	const restoDivisao = numero1 % 2
	const numeroPar = restoDivisao === 0
	return numeroPar
}

console.log(resultado3(4))

// (d) tamanho da mensagem

const frase = prompt("Insira um texto!")

const resultado4 = (texto) => {
	const tamanho = frase.length
	return tamanho
}

console.log(resultado4(frase))

// (3)

const numero1 = prompt("Insira um número")
const numero2 = prompt("Insira outro número")

const operaçoes = (numeros) => {
	const soma = Number(numero1) + Number(numero2)
	const diferença = numero1 - numero2
	const multiplicação = numero1 * numero2
	const divisão = numero1 / numero2
	console.log(`
	/soma: ${soma}
	/subtração: ${diferença}
	/multiplicação ${multiplicação}
	/divisão ${divisão}`)
}

operaçoes()
