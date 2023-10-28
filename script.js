const buttons = document.querySelectorAll('button')
buttons[0].addEventListener('click',rock)
buttons[1].addEventListener('click',paper)
buttons[2].addEventListener('click',scissor)
let result = document.createElement("p")
document.querySelector('body').appendChild(result)
function rock(){
    Calculate('Rock')
}
function paper(){
    Calculate('Paper')
}
function scissor(){
    Calculate('Scissor')
}

function Calculate(x){

    let y = Math.random()
    if (0<=y && y<1/3)
        y = 'Rock'
    else if(1/3<=y && y<2/3)
        y = 'Paper'
    else if(2/3<=y && y<1)
        y = 'Scissor'
    if (x==y){
        result.innerHTML = `You have choosed '${x}' and computer has choossed '${y}', <b>"Tie"</b>.`
    }
    else if (x=='Rock' && y=='Scissor'){
        result.innerHTML = `You have choosed '${x}' and computer has choossed '${y}', <b>"You Win"</b>.`
    }
    else if (x=='Paper' && y=='Rock'){
        result.innerHTML = `You have choosed '${x}' and computer has choossed '${y}', <b>"You Win"</b>.`
    }
    else if (x=='Scissor' && y=='Paper'){
        result.innerHTML = `You have choosed '${x}' and computer has choossed '${y}', <b>"You Win"</b>.`
    }
    else{
        result.innerHTML = `You have choosed '${x}' and computer has choossed '${y}', <b>"You Lose"</b>.`
    }
}