//Query Selector do Body e Criação dos elementos
var body = document.querySelector("body");
var mainPage = document.createElement("main");
var ProductList = document.createElement("ul");
var ProductItem = document.createElement("li");
var ProductDetails = document.createElement("ul");
var ProductSome = document.createElement("li");
var buttonEnd = document.createElement("button");
var section = document.createElement("section");
var p = document.createElement("p");

//Criaçao do Array de Objetos com os produtos
const productsCart = [
  {
    name: "Cenoura",
    price: 4.0,
  },
  {
    name: "Laranja",
    price: 3.0,
  },
  {
    name: "Batata",
    price: 5.0,
  },
  {
    name: "Cebola",
    price: 1.0,
  },
];

//Variavel de apoio para a função da soma
var precoTotal = 0;

//appenChild, para montar a estrutura da página
body.appendChild(mainPage);

mainPage.appendChild(ProductList);

mainPage.appendChild(ProductDetails);

mainPage.appendChild(section);

section.appendChild(p);
section.appendChild(buttonEnd);

buttonEnd.textContent = "Finalizar"; //Editando o texto do botão

// Gerando os itens da lista e seus preços

function objetos(array) {
  array.forEach((produto) => {
    ProductList.innerHTML += `<li>${produto.name} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp R$${produto.price},00</li>`;
  });
}

objetos(productsCart);

p.textContent = "Clique no botão para ver o valor Gasto";

// Percorrendo os valores do array e somando os valores com a função soma
function soma(array) {
  array.forEach((produto) => {
    precoTotal += produto.price;
    console.log(precoTotal);
    p.textContent = `O total gasto foi R${precoTotal},00`;
  });
}
// Soma criada, vamos fazer o botão ativar o evento da soma e aparecer um texto com o total gasto
// Ok, ainda não consegui fazer com que o texto apareça ápos eu clicar, mas por enquanto é isso

buttonEnd.addEventListener("click", soma(productsCart));
