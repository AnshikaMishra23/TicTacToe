console.log("Welcome to tic tac toe")
let music= new Audio("media/music.mp3")
let audioTurn= new Audio("media/click.wav")
let gameover= new Audio("media/gameover.wav")
let turn="X"
let isgameOver=false
// function to change the turn 
const changeTurn=()=>{
    return turn==="X"? "0":"X"
}

//function to check for a win
const checkWin=()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
        
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[2]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText +"   WON"
            isgameOver=true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            document.querySelector('.line').style.transform= `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width="20vw";
        }
    })
}

// Game logic
// music.play();
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext= element.querySelector('.boxtext')
    element.addEventListener('click',(e)=>{
        if (boxtext.innerText===''){
            boxtext.innerText= turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameOver){
            document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
            }
        }
    })
})

//add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts= document.querySelectorAll('.boxtext');
    boxtexts.forEach(element=>{
        element.innerText="";
    })
    turn ="X";
    isgameOver=false;
    document.getElementsByClassName("info")[0].innerText = " turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    document.querySelector('.line').style.width=0;


    

})