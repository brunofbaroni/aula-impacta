// alert('hello world')
console.log('debugar codigo')

/**
  Tipos primitivos
  String -> caracteres usa aspas ' ou "
  Number -> numero direto sem aspas
  Boolean -> verdadeiro ou falso - coloque true ou false
  Null -> ela não tem nenhum valor, ele entende como object - coloque null
  Undefined -> a variavel não recebeu nenhum valor
 */

var nome;
var valorCurso = 550.42;
nome = 'Bruno';

console.log(nome)
console.log(typeof nome)

console.log(valorCurso + 10)

var idade = 10;
var soma;

soma = ++idade;

console.log(soma)

// Concatenação e Interpolação

var firstName = "José";
var lastName = "Silva";

var nomeCompletoC = firstName + ' ' + lastName;
var nomeCompletoI = `Nome: ${firstName} ${lastName}`;

console.log(nomeCompletoI)

// Operadores Relacionais
// > (maior que), < (menor que), >= (maior ou igual),
// <= (menor ou igual), == (igual com coerção),
// === (estritamente igual), != (diferente com coerção),
// !== (estritamente diferente)
// + operador unario (consegue forçar uma string para numero)
// var1 = '10' + var2 = 10 - soma = 1010
// mas se var1 = +'10' /+ var2 = 10 - soma = 20

var val1 = 10;
var val2 = 20;

var comparar = val1 == val2;

console.log(comparar);

// Truthy e Falsy
// o java script pode interpetar algumas palavras como true ou false no contexto boleano
// o ponto de exclamação ! inverte o resultado, o true aparece como falso

var contrato = 'yes';
console.log(!contrato)

// Estrutura de Seleção
// && -> e (and)
  //  ! -> não ou inverter a situação
  //  || -> ou

var notaAluno = 6;
var nomeAluno = 'Paulo Enrique'
var faltas = 10;

// se o aluno tiver uma nota >= 7 aprovado e faltas <= 5
// se menor que 5 reprovado
// se estiver >= 5 recuperacao

if(notaAluno >= 7 && faltas <= 5) {
  console.log('Aprovado')
} else if(notaAluno >= 5 && faltas <= 5) {
  console.log('Recuperação')
}
else {
  console.log('Reprovado')
}

//Operador Ternario
var resultado;

resultado = notaAluno >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado)




