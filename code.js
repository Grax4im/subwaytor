const table = document.querySelector('table')
const button = document.querySelector('button')
const img = document.querySelector('.imagem')
let imgHref = null;
button.onclick = function () {
    populaTabela();
}
//array com todas as opcoes
const opcoes = [
    ['Recheio', [
        ['Atum'],
        ['Beef Bacon Chipotle'],
        ['Beef Barbecue Bacon'],
        ['Carne Supreme'],
        ['B.M.T Italiano'],
        ['Frango'],
        ['Frango Defumado com Cream Cheese'],
        ['Frango Empanado'],
        ['Frango Pesto Cream Cheese'],
        ['Frango Ranch'],
        ['Franjo Teriyaki'],
        ['Steak Cheddar Cremoso'],
        ['Steak Churrasco']
        ['Vegetariano']
    ]],
    ['Pão', [
        '3 Queijos',
        'Parmesão e orégano',
        '9 Grãos',
        'Italiano Branco',
        'Granola Salgada',
        'Manteiga Temperada'
    ]],
    ['Tamanho', [
        '15cm',
        '30cm'
    ]],
    ['Queijo',[
        'Cheddar',
        'Suiço',
        'Mussarela Ralada'
    ]],
    ['Adicional',[
        'Nenhum',
		'Bacon',
		'Tomate Seco',
		'Cream Cheese'
    ]],
    ['Tostado',[
        'Sim',
        'Não'
    ]],
    ['Vegetais',[
        'Azeitonas',
        'Picles',
        'Pepino',
        'Pimentão',
        'Alface',
        'Cebola Roxa',
        'Tomate',
        'Rúcula',
        'Cenoura Ralada',
        'Vinagrete'
    ]],
    ['Molho',[
        'Cebola Agridoce',
        'Chipotle(picante)',
        'Barbecue',
        'Parmesão',
        'Maionese Temperada',
        'Mostarda e Mel',
        'Supreme'
    ]],
    ['Tempero',
    [
        'Sal',
        'Vinagre',
        'Azeite de Oliva',
        'Pimenta Calabresa',
        'Pimenta do Reino'
    ]]
]

//extrai os campos do array onde estão os nomes das categorias, que ficam do lado esquerdo na tabela
function criaNomes() {
    return opcoes.map((a) => a[0]) 
}

//Seleciona aleatóriamente um item de cada elemento do array
function selecionaSabores() {
    random = 0; //aqui eu coloco a função que gera numeros aleatórios de 0 até tamanho do array opcoes hihihi
    return opcoes.map(function(a) {
        return a[1][random]
    })
}

//Enche a tabela com o Sabores escolhido
function populaTabela() {
    //esvazia a tabela
    table.innerHTML = "";
    const nomes = criaNomes();
    const sabores = selecionaSabores();
    for(let i = 0; i < opcoes.length; i++){
        let nomeNode = document.createTextNode(nomes[i])
        let saboresNode = document.createTextNode(sabores[i])
        let row = table.insertRow()
        let cell = row.insertCell()
        cell.appendChild(nomeNode)
        cell = row.insertCell()
        cell.appendChild(saboresNode)
    }
}

function setImg() {
    let nomeRecheio = document.querySelector('table tr:nth-child(1) td:nth-child(2)');
    nomeRecheio = nomeRecheio.textContent
    imgHref = 'sandubas/'

    switch (nomeRecheio) {
        case 'Atum':
            imgHref+="0.jpg";
            break;
    }

    //criar a imagem, colocar dentro da div e setar o href...
}
