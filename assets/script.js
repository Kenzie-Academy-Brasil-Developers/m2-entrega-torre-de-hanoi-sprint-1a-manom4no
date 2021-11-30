//container

let towerContainer = document.createElement('div');
towerContainer.setAttribute('class', 'towerContainer');

//colunas

let towerRodZero = document.createElement('ul');
towerRodZero.setAttribute('class', 'towerRodZero');
towerRodZero.setAttribute('id','coluna1');
towerRodZero.addEventListener('click', takeDisc);
let towerRodOne = document.createElement('ul');
towerRodOne.setAttribute('class', 'towerRodOne');
towerRodOne.setAttribute('id', 'coluna2');
towerRodOne.addEventListener('click', takeDisc);
let towerRodTwo = document.createElement('ul');
towerRodTwo.setAttribute('class', 'towerRodTwo');
towerRodTwo.setAttribute('id', 'coluna3');
towerRodTwo.addEventListener('click',takeDisc);

//linhas

let liZero = document.createElement('li');
liZero.setAttribute('class','liZero');
liZero.setAttribute('id','disco1');
let liOne = document.createElement('li');
liOne.setAttribute('class','liOne');
liOne.setAttribute('id','disco2');
let liTwo = document.createElement('li');
liTwo.setAttribute('class','liTwo');
liTwo.setAttribute('id','disco3');
let liThree = document.createElement('li');
liThree.setAttribute('class','liThree');
liThree.setAttribute('id','disco4');



function towerCreation (){
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

let count = 0

function takeDisc(evt){
    const addDisc = evt.currentTarget;
    let take = addDisc.lastElementChild;

    function deployDisc(evt){
        const compactDisc = evt.currentTarget

        if(takeDisc.clientWidth < compactDic.lastElementChild.clientWidth){
            evt.appenchild(take[0])
            count++
        }else{
            alert("não pode por um disco maior por cima do menor")
        }
    }
}

/*condição de vitoria*/
