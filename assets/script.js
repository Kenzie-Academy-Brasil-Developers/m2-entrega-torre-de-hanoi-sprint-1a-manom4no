function towerCreation (){
    //container

    let towerContainer = document.createElement('div');
    towerContainer.setAttribute('class', 'towerContainer');

    //colunas

    let towerRodZero = document.createElement('ul');
    towerRodZero.setAttribute('class', 'towerRodZero');
    towerRodZero.setAttribute('id','coluna1')
    let towerRodOne = document.createElement('ul');
    towerRodOne.setAttribute('class', 'towerRodOne');
    towerRodOne.setAttribute('id', 'coluna2')
    let towerRodTwo = document.createElement('ul');
    towerRodTwo.setAttribute('class', 'towerRodTwo');
    towerRodTwo.setAttribute('id', 'coluna3')

    //linhas

    let liZero = document.createElement('li');
    liZero.setAttribute('class','liZero');
    let liOne = document.createElement('li');
    liOne.setAttribute('class','liOne');
    let liTwo = document.createElement('li');
    liTwo.setAttribute('class','liTwo');
    let liThree = document.createElement('li');
    liThree.setAttribute('class','liThree');

    //estrutura
    towerRodZero.appendChild(liZero);
    towerRodZero.appendChild(liOne);
    towerRodZero.appendChild(liTwo);
    towerRodZero.appendChild(liThree);

    towerContainer.appendChild(towerRodZero);
    towerContainer.appendChild(towerRodOne);
    towerContainer.appendChild(towerRodTwo);

    document.getElementById('tower').appendChild(towerContainer)
}
towerCreation()

function firstButton(){
    
}
function secondButton(){
    
}
function thirdButton(){
    
}
function fourthButton(){
    
}
function fifthButton(){
    
}
function sixthButton(){
    
}