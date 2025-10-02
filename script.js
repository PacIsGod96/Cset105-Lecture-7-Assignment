function createMulti(){
    let input = Number(window.prompt(`Enter a number: `));
    let length = Number(window.prompt(`How long should the table be: `))
    for(let i=1; i<length+1; i++){
        let item = document.createElement(`li`);
        item.innerText = `${i} * ${input} = ${input * i}`
        document.getElementById(`ul`).appendChild(item)
    }
    let br = document.createElement(`br`)
    document.getElementById(`ul`).appendChild(br)
}