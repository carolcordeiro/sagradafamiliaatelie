let itens = [
    {"foto": "../fotos/PortaCarteirinha.JPG",
    "titulo": "Porta Carteira de Vacina e Documentos",
    "observacoes": ['100% personalizado' , 
                    'Com vários bolsos internos']},

    {"foto": "../fotos/Case.png",
    "titulo": "Case para livros ou Kindle",
    "observacoes": ['100% personalizado' , 
                    'Tamanho variado', 
                    'Alcochoado']},

    {"foto": "../fotos/Fraldas.JPG",
    "titulo": "Fraldas de Boca",
    "observacoes": ['100% personalizado' , 
                    'Tamanho variado']},

    {"foto": "../fotos/mantabebe.png",
    "titulo": "Manta para bebê",
    "observacoes": ['100% personalizado' , 
                    'Alcochoado']},

    {"foto": "../fotos/Capturar3.JPG",
    "titulo": "Fraldas de Boca",
    "observacoes": ['100% personalizado' , 
                    'Tamanho variado', 
                    'Com alça para chupeta']},

    {"foto": "../fotos/conjuntocozinha.png",
    "titulo": "Conjunto de cozinha",
    "observacoes": ['100% personalizado' , 
                    'Tamanho variado', 
                    'Conjunto com diferentes números de peças']}

]


let divP = document.querySelector('.divp')


for (let i = 0; i < itens.length; i++){
    let novoDiv = document.createElement("div");

    let foto = document.createElement("img");
    foto.src = itens[i].foto

    let titulo = document.createElement('h3');
    titulo.textContent = itens[i].titulo;

    let lista = document.createElement('ul');
        
    for (obs of itens[i].observacoes){
        let novoLi = document.createElement('li');
        novoLi.textContent = obs;
        lista.appendChild(novoLi)
    }

    novoDiv.appendChild(foto);
    novoDiv.appendChild(titulo);
    novoDiv.appendChild(lista);

    divP.appendChild(novoDiv);
}

