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
    ['Queijo', [
        'Cheddar',
        'Suiço',
        'Mussarela Ralada'
    ]],
    ['Adicional', [
        'Nenhum',
        'Bacon',
        'Tomate Seco',
        'Cream Cheese'
    ]],
    ['Tostado', [
        'Sim',
        'Não'
    ]],
    ['Vegetais', [
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
    ['Molho', [
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

//lado esquerdo da tabela
function criaNomes() {
    return opcoes.map((a) => a[0])
}

//lado direito da tabela
function selecionaSabores() {
    return opcoes.map(function (a) {
        random = Math.floor(Math.random() * (a[1].length - 1 - 0) + 0);
        return a[1][random]
    })
}

//Popula a tabela 
function populaTabela() {
    //esvazia a tabela
    table.innerHTML = ""
    
    //pega os nomes fixos e Seleciona os sabores aleatórios
    const nomes = criaNomes()
    const sabores = selecionaSabores()
    
    //começa a iterar sobre todos os conjuntos (nome,sabor) um de cada vez
    for (let i = 0; i < opcoes.length; i++) {
    	//cria um "elemento" com o nome e o sabor referentes ao numero da iteracao
        let nomeNode = document.createTextNode(nomes[i])
        let saboresNode = document.createTextNode(sabores[i])
        
        //cria uma linha na nossa tabela (API das tabelas \o/)
        let row = table.insertRow()
        
        //cria uma coluna e adiciona o nome (lado esquerdo)
        let cell = row.insertCell()
        cell.appendChild(nomeNode)
        
        //cria outra coluna e adiciona o sabor escolhido aleatório (lado direito)
        cell = row.insertCell()
        cell.appendChild(saboresNode)
    } //acaba a iteração
    //cria a imagem correspondente ao recheio sorteado
    setImg();
}

// hoisting \õ/ 
function setImg() {
	//zera a imagem	
    img.innerHTML = ""
    //pega o primeiro elemento do lado direito da tabela (no caso, o nome do Recheio escolhi aleatório :) )
    let nomeRecheio = document.querySelector('table tr:nth-child(1) td:nth-child(2)')
    nomeRecheio = nomeRecheio.textContent
    
 	//escolhe a imagem de acordo com o nome do Recheio (suspeito que exista um jeito melhor de fazer isso...)
    function chooseName() {
        switch (nomeRecheio) {
            case 'Atum':
                return "sandubas/1.jpg"
                break;
            case 'Beef Bacon Chipotle':
                return "sandubas/2.jpg"
                break
            case 'Beef Barbecue Bacon':
                return "sandubas/3.jpg"
                break
            case 'Carne Supreme':
                return "sandubas/4.jpg"
                break
            case 'B.M.T Italiano':
                return "sandubas/5.jpg"
                break
            case 'Frango':
                return "sandubas/6.jpg"
                break;
            case 'Frango Defumado com Cream Cheese':
                return "sandubas/7.jpg"
                break;
            case 'Frango Empanado':
                return "sandubas/8.jpg"
                break;
            case 'Frango Pesto Cream Cheese':
                return "sandubas/9.jpg"
                break;
            case 'Frango Ranch':
                return "sandubas/10.jpg"
                break;
            case 'Franjo Teriyaki':
                return "sandubas/11.jpg"
                break;
            case 'Steak Cheddar Cremoso':
                return "sandubas/12.jpg"
                break;
            case 'Steak Churrasco':
                return "sandubas/13.jpg"
                break;
            case 'Vegetariano':
                return "sandubas/14.jpg"
                break;
        } //fim do switch
    } // fim da função chooseName
    
    //cria a tag html <img>
    let tagImage = document.createElement('img')
    //coloca o atributo src de acordo com o recheio escolhido
    tagImage.setAttribute('src', chooseName())
    //coloca o atributo src dentro da imagem :)
    img.appendChild(tagImage)
}

//toda vez que recarregar a página chama a função pra popular a tabela
window.onload = function () { 
    populaTabela()
}
