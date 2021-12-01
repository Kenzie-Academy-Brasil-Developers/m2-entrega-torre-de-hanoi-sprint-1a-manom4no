//container

let towerContainer = document.createElement('div');
towerContainer.setAttribute('class', 'towerContainer');
towerContainer.setAttribute('id','towerContainer')

//colunas

let towerRodZero = document.createElement('ul');
towerRodZero.setAttribute('class', 'towerRodZero');
towerRodZero.setAttribute('id','coluna1');
towerRodZero.addEventListener('click', deployDisc);
let towerRodOne = document.createElement('ul');
towerRodOne.setAttribute('class', 'towerRodOne');
towerRodOne.setAttribute('id', 'coluna2');
towerRodOne.addEventListener('click', deployDisc);
let towerRodTwo = document.createElement('ul');
towerRodTwo.setAttribute('class', 'towerRodTwo');
towerRodTwo.setAttribute('id', 'coluna3');
towerRodTwo.addEventListener('click',deployDisc);

//linhas

let liZero = document.createElement('li');
liZero.setAttribute('class','liZero');
liZero.setAttribute('id','disco1');
liZero.addEventListener('click', takeDisc);
let liOne = document.createElement('li');
liOne.setAttribute('class','liOne');
liOne.setAttribute('id','disco2');
liOne.addEventListener('click', takeDisc);
let liTwo = document.createElement('li');
liTwo.setAttribute('class','liTwo');
liTwo.setAttribute('id','disco3');
liTwo.addEventListener('click', takeDisc);
let liThree = document.createElement('li');
liThree.setAttribute('class','liThree');
liThree.setAttribute('id','disco4');
liThree.addEventListener('click', takeDisc);
let liFour = document.createElement('li');
liFour.setAttribute('class','liFour');
liFour.setAttribute('id','disco5');
liFour.addEventListener('click', takeDisc);

//contador

let count=0

//estrutura

function towerCreation (){
    towerRodZero.appendChild(liZero);
    towerRodZero.appendChild(liOne);
    towerRodZero.appendChild(liTwo);
    towerRodZero.appendChild(liThree);

    towerContainer.appendChild(towerRodZero);
    towerContainer.appendChild(towerRodOne);
    towerContainer.appendChild(towerRodTwo);
    document.getElementById('tower').appendChild(towerContainer)
    Count()
}
towerCreation()

//pegar disco

let take;
function takeDisc(evt){
    let add = evt.currentTarget.closest('ul')
    take = add.lastElementChild
}

//depositar disco

function deployDisc(evt){
    const repositoryDisc = evt.currentTarget.closest('ul')
    //condição de movimento
    if(repositoryDisc.childElementCount === 0 ||  repositoryDisc.lastElementChild.clientWidth > take.clientWidth){
        repositoryDisc.appendChild(take)
        count++
        Count()
    }
    //condição de negação
    if(repositoryDisc.lastElementChild.clientWidth < take.clientWidth){
        alert('nao pode colocar o maior sobre o menor')
    }
    //condição de vitória
    if(towerRodZero.childElementCount === 0 && towerRodOne.childElementCount === 0){
        document.getElementById('footer').style.display='flex';
    }  
}

/*dificuldade*/
function addShaoKhan(){
    let buttonDificulty = document.getElementById('dificuldade');
    buttonDificulty.setAttribute('class','buttonDificulty');
    buttonDificulty.addEventListener('click',function(evt){
        towerRodZero.appendChild(liFour);    
        }
    )
}
addShaoKhan()

/*reset*/
function reset(){
    let buttonReset = document.getElementById('reset');
    buttonReset.addEventListener('click',function(evt){
        towerRodZero.appendChild(liZero);
        towerRodZero.appendChild(liOne);
        towerRodZero.appendChild(liTwo);
        towerRodZero.appendChild(liThree);
        document.getElementById('footer').style.display='none';
        liFour.remove();
        count=0;
        Count()
        }
    )
}
reset()
/*contador*/
function Count(){
    let result = document.getElementById('count');
    result.innerText=count
}