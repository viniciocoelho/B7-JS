/*
//alert("Hello World !!!!")
console.log("teste")
var nome = 10
console.log(nome)

let sobre = "eu sou"
console.log(sobre)

let lista = ["livro", "casa", "carro", "ovo"]
console.log(lista)

// STRING E TEMPLATE STRING

var nome = "vinicio";
var sobreNome = "coelho";
var nomeCompleto = nome + ' ' + sobreNome;
console.log(nomeCompleto);

var nome2 = `${nome} ${sobreNome}`;
console.log(nome2);

// CONDICIONAL TERNÁRIA
var isMember = true;
var envio = isMember ? 2 : 10;
console.log(envio);

function gravidade()
{
    console.log("testando");
}
gravidade();

function somar(a, b)
{
    var soma = a + b;
    console.log(soma);
}
somar(2,25);

function maiorIdade (idade)
{
    if(idade >= 18)
    {
        return true;
    } else
    {
        return false;
    }
}

var idade = 5;
var verificacao = maiorIdade(idade);
console.log(verificacao);

//ARROW FUNCTION
const somar3 = (x, y) => {
    return x + y;
}
console.log(somar3(5, 6));

//ARRAY

var cores = ["azul","verde","vermelho","amarelo"];
console.log(cores);
console.log(cores[2]);

//OBJETOS

let persona = {
    nome: 'coelho',
    idade: 90,
    pais: 'BR',
    olhos: ['preto','azul'],
    caract: {
        forca: 10,
        altura: 55,
        magia: 1
    }
};
console.log(persona);
console.log(persona.idade);
console.log(persona.pais);
console.log(`${persona.nome} tem ${persona.idade} anos.`);
console.log(persona.caract.forca); // acessando o objeto dentro do objeto
console.log(persona.olhos[1]); //acessando item do arry dentro do objeto

persona.caract.forca +=5;
persona.nome = 'pedro';
persona.olhos.push('verde');
console.log(persona.olhos);
console.log(persona);

//Funcão dentro do objeto

let pessoa = {
    nome: 'coelho',
    sobrenome: 'guima',
    idade: 50,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
console.log(pessoa.nomeCompleto());

/////////--------------------------------------------+

for(let n = 0; n < 15; n++){
    console.log('frase qualquer' + n);
}

let colors = ['preto','branco','azul','verde'];
cores.push('vermelho');
for (let i in colors) {
    console.log(colors[i]);
}


//MANIPULAÇÃO DE ELEMENTOS COM JS
function clicou() {
    
    console.log("clicou no btn");
}

let botao = document.querySelector('.btn');
botao.addEventListener("click", () => {
    clicou();
});


function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    ul.children[0].innerHTML = "item <strong>alterado<\strong>";

     //ul.innerHTML += "<li>Item Alterado</li>";
};

let botao = document.querySelector('.btn');
botao.addEventListener("click", () => {
    clicou();
});


let botao = document.querySelector('.btn');
botao.addEventListener("click", () => {
    clicou();
});

function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    let newLi = document.createElement("li");
    newLi.innerText = "Item adicionado";

    ul.appendChild(newLi);

    ul.prepend(newLi); 

    ul.append("<li>Item Adicionado<\li>");


};


let botao = document.querySelector('.btn');
botao.addEventListener("click", () => {
    clicou();
});

function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    /*const newBtn = document.createElement('button');
    newBtn.innerHTML = "Botão";
    ul.after(newBtn);

    let newUl = document.createElement('ul');
    for(let i = 0; i < 5; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = "Item add " +i;
        newUl.append(newLi);

    }

    ul.after(newUl);
};
//COMO PEGAR ATRIBUTOS DE UM ELEMENTO
function clicou() {

    const input = document.querySelector('input');
    const botao = document.querySelector('.btn');


    if(input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'password');       
        botao.innerText = "Mostrar Senha";
    } else {
        input.setAttribute('type', 'text');
        botao.innerText = "Mostrar Senha";
    }
}


// ALTERAÇÃO DE ESTILOS IN LINE
function clicou() 
{
    const li = document.querySelector('li');

    li.style.backgroundColor = '#00F';
    li.style.fontSize = '20px';
}


function clicou()
{
    const btn = document.querySelector('button');
    btn.classList.add('green');

// # 1        
    if(btn.classList.contains('blue'))
    {
        btn.classList.remove('blue');
        btn.classList.add('green');
    }
    else 
    {
        btn.classList.add('blue');
        btn.classList.remove('green');
    }

// # 2
    if (btn.classList.contains('blue'))
    {
        btn.classList.replace('blue', 'green');
    }
    else
    {
        btn.classList.replace('green', 'blue');
    }

// # 3
    btn.classList.replace('blue', 'green');
};



function apertou()
{
    console.log("apertou");
}

function segurou()
{
    console.log("segurou");
}

function soltou()
{
    console.log("soltou");
}
*/


function soltou(e){
    console.log(e);

}
const input = document.querySelector('input');
input.addEventListener('keyup', soltou);
