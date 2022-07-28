let windowWidth = window.screen.width;
let windowHeight = window.screen.height;

const person = document.querySelector('.person')
const style_tag = document.querySelector('#styles')
console.log(style_tag)
let pos = person.style.left+1-1;
let speed = 15;

let person_styles = `
    .goRight {
        animation: goRight 0.05s linear;
    }
    @keyframes goRight {
        0%{
            left: ${pos}px;
        }
        100%{
            left: ${pos+speed}px;
        }
    }
    .goLeft {
        animation: goLeft 0.05s linear;
    }
    @keyframes goLeft {
        0%{
            left: ${pos}px;
        }
        100%{
            left: ${pos-speed}px;
        }
    }
`
style_tag.innerHTML=person_styles


// inGameMovements
document.addEventListener('keydown', ()=>{
    if(event.key==' ' || event.key=='w' ||event.key=='ArrowUp'){
        jump()
    }
    if(event.key=='d' || event.key=='ArrowRight'){
        goRight()
    }
    if(event.key=='a' || event.key=='ArrowLeft'){
        goLeft()
    }
})

function jump () {
    if(person.classList.contains('jump')==0){
        person.classList.add('jump')
        setTimeout(()=>{
            person.classList.remove('jump')
        },750)
    }
    console.log(`Position: ${pos}`)
}

function goLeft() {
    if(pos>0){
        person.style.left = `${pos-20}px`
        pos = pos - 20;
    }
    console.log(`Position: ${pos}`)
}

function goRight() {
    if(person.classList.contains('goRight')==0 && pos<1100){
        person.classList.add('goRight')
        pos=pos+speed;
        let person_styles = `
    .goRight {
        animation: goRight 0.05s linear;
    }
    @keyframes goRight {
        0%{
            left: ${pos}px;
        }
        100%{
            left: ${pos+speed}px;
        }
    }
    .goLeft {
        animation: goLeft 0.05s linear;
    }
    @keyframes goLeft {
        0%{
            left: ${pos}px;
        }
        100%{
            left: ${pos-speed}px;
        }
    }
    .person {
        left: ${pos+speed}px;
    }
`
        style_tag.innerHTML=person_styles;
        setTimeout(()=>{
            person.classList.remove('goRight')
        },50)
    }
    console.log(`Position: ${pos}`)
}

function goLeft() {
    if(person.classList.contains('goLeft')==0 && pos>0){
        person.classList.add('goLeft')
        pos=pos-speed;
        let person_styles = `
    .goRight {
        animation: goRight 0.05s linear;
    }
    @keyframes goRight {
        0%{
            left: ${pos}px;
        }
        100%{
            left: ${pos+speed}px;
        }
    }
    .goLeft {
        animation: goLeft 0.05s linear;
    }
    @keyframes goLeft {
        0%{
            left: ${pos}px;
        }
        100%{
            left: ${pos-speed}px;
        }
    }
    .person {
        left: ${pos-speed}px;
    }
`
        style_tag.innerHTML=person_styles;
        setTimeout(()=>{
            person.classList.remove('goLeft')
        },50)
    }
    console.log(`Position: ${pos}`)    
}