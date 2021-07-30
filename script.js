const body = document.getElementsByTagName('body')[0];
const button = document.getElementsByTagName('button')[0];
const text = document.getElementById('text');
const scorevue = document.getElementById('score');
const bestscorevue = document.getElementById('bestscore');
let isClicked = false 
let score = 0
let timeout
if(!localStorage.getItem('bestscore')){
    localStorage.setItem("bestscore", 0)
}
bestScore = parseInt(localStorage.getItem('bestscore'))
bestscorevue.innerHTML = localStorage.getItem('bestscore')

text.addEventListener('click', () =>  {
    score ++;
    scorevue.innerHTML = score;
    let left = parseFloat(Math.floor(Math.random() * 100))
    let top = parseFloat(Math.floor(Math.random() * 100))
    text.style.left = left + '%';
    text.style.top = top + '%';
    bestscorevue.innerHTML = localStorage.getItem('bestscore')
    if(score > bestScore){
        localStorage.setItem('bestscore', score)
    }
    if(isClicked === false){
        isClicked = true
        timeout = setInterval(() => {
            FUNC()        
        }, 10000)
    }
    })

function FUNC(){

    clearInterval(timeout)
    text.style.left = '50%';
    text.style.top = '50%';
    if(score  > localStorage.getItem('bestscore')){
        alert ('nouveau meilleur score')
        localStorage.setItem('bestscore', score)
    }else if (localStorage.getItem('bestscore') - 2 < score) {
        alert ('dommage presque')
    } else if(localStorage.getItem('bestscore') == score) {
      alert('exaequo')  
    } else {
        
        alert('votre score: ' + score  + ', Meilleur score :' + localStorage.getItem('bestscore') )
    }

    isClicked = false;
    score = 0;
}