
var requestURL = 'https://raw.githubusercontent.com/carolcordeiro/sagradafamiliaatelie/main/JS/preligiosas.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var itens = request.response;
  }

let divP = document.querySelector('.divp')


for (let i = 0; i < itens.length; i++){
    let novoDiv = document.createElement("div");

    let foto = document.createElement("img");
    foto.src = itens[i].foto

    let titulo = document.createElement('h3');
    titulo.textContent = itens[i].titulo;

    let listaprincipal = document.createElement('ul');
        
    let litecido = document.createElement('li');
    litecido.textContent = itens[i].tecido;

    let licores = document.createElement('li');
    licores.textContent = itens[i].cores;

    let lipeças = document.createElement('li');
    let ulpeças = document.createElement('ul');
    lipeças.textContent = "Contém: ";
    lipeças.appendChild(ulpeças);
    for (peça of itens[i].peças){
        let novapeça = document.createElement('li');
        novapeça.textContent = peça;
        ulpeças.appendChild(novapeça);
    }

    listaprincipal.appendChild(litecido);
    listaprincipal.appendChild(licores);
    listaprincipal.appendChild(lipeças);

    novoDiv.appendChild(foto);
    novoDiv.appendChild(titulo);
    novoDiv.appendChild(listaprincipal);

    divP.appendChild(novoDiv);
}

