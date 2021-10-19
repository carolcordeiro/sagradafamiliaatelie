let itens = [
    {"foto": "../fotos/alfaia ihs.jpg",
    "titulo": "Kit de Alfaias IHS",
    "tecido": "Tecido 100% algodão.",
    "cores": "Bordados em dourado",
    "peças": ["Pala", "Corporal", 
              "Sanguíneo", "Manustérgio"]},

    {"foto": "../fotos/alfaia mariana.jpg",
    "titulo": "Kit de Alfaias Marianas",
    "tecido": "Tecido 100% algodão.",
    "cores": "Bordados em Dourado e Azul",
    "peças": ["Pala", "Corporal", 
              "Sanguíneo", "Manustérgio"]},

    {"foto": "../fotos/alfaia cruz.jpg",
    "titulo": "Kit de Alfaias Cruz",
    "tecido": "Tecido 100% algodão.",
    "cores": "Bordados em Dourado, Prata e Branco",
    "peças": ["Pala", "Corporal", 
              "Sanguíneo", "Manustérgio"]},

    {"foto": "../fotos/cruz-e.png",
    "titulo": "Kit de Alfaias Cruz",
    "tecido": "Tecido 100% algodão.",
    "cores": "Bordados em Dourado e Prata (Pala)",
    "peças": ["Pala", "Corporal", 
              "Sanguíneo", "Manustérgio"]},

    {"foto": "../fotos/cruzsimples.png",
    "titulo": "Kit de Alfaias Cruz Simples",
    "tecido": "Tecido 100% algodão.",
    "cores": "Bordados em Dourado",
    "peças": ["Pala", "Corporal", 
              "Sanguíneo", "Manustérgio"]},

    {"foto": "../fotos/trigouva.png",
    "titulo": "Kit de Alfaias Eucaristia",
    "tecido": "Tecido 100% algodão.",
    "cores": "Bordados em Dourado",
    "peças": ["Pala", "Corporal", 
              "Sanguíneo", "Manustérgio"]}
]


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

