function createMulti(){
    let input = Number(window.prompt(`Enter a number: `));
    let length = Number(window.prompt(`How long should the table be: `));
    for(let i=1; i<length+1; i++){
        let item = document.createElement(`li`);
        item.innerText = `${i} * ${input} = ${input * i}`;
        document.getElementById(`ul`).appendChild(item);
    }
    let br = document.createElement(`br`);
    document.getElementById(`ul`).appendChild(br);
}

let button = [];
function buttonColor(){
    let colors = [`red`, `green`, `blue`, `yellow`];
    let div = document.getElementById(`div`);
    div.innerHTML= ``;
    button = [];
    colorHolder = [];
    for(let x = 1; x < 11; x++){
        let indBut = document.createElement(`button`);
        indBut.innerHTML = `Button` + x;
        let randomColor = colors[Math.floor(Math.random()*colors.length)];
        indBut.style.backgroundColor = randomColor;
        indBut.style.display = `block`;
        indBut.style.marginBottom = `10px`;
        
        div.appendChild(indBut);
        button.push(indBut);
        colorHolder.push(randomColor);
    }
}

function selector(select){
    let selected = select.value;
    if(selected == `red`){
        for(let i = 0; i < button.length; i++){
            button[i].style.backgroundColor = `red`
        }
    }else if(selected == `green`){
        for(let i = 0; i < button.length; i++){
            button[i].style.backgroundColor = `green`
        }
    }else if(selected == `blue`){
        for(let i = 0; i < button.length; i++){
            button[i].style.backgroundColor = `blue`
        }
    }else if(selected == `yellow`){
        for(let i = 0; i < button.length; i++){
            button[i].style.backgroundColor = `yellow`
        }
    }else if(selected == `random`){
        let colors = [`red`, `green`, `blue`, `yellow`];
        for(let i = 0; i < button.length; i++){
            let randomColor = colors[Math.floor(Math.random()*colors.length)];
            button[i].style.backgroundColor = randomColor
        }
    }else if(selected == 'reset'){
       for(let i = 0; i < button.length; i++){
            button[i].style.backgroundColor = colorHolder[i]
       }
    }
}