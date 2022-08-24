const img = document.querySelector ("#img");
const name = document.querySelector("#nom");
const nickname  = document.querySelector ("#nickname");
const birthday  = document.querySelector ("#birthday");
const category  = document.querySelector ("#category");
const occupation  = document.querySelector ("#occupation");
const portrayed  = document.querySelector ("#portrayed");
const status   = document.querySelector ("#status ");




const api = "https://www.breakingbadapi.com/api/characters";

async function getData(){
    const response = await fetch(api);
    const data = await response.json();
    printData(data)
}

function printData(data){
    const header = document.querySelector ("#header");

    header.innerHTML += `
    <select class="form-control w-25 my-3" style="margin:0 auto;" onchange="getCh(this.value)">
             <option>Please Select A Actor</option>
            ${data.map( charachter => `<option>${charachter.name}</option>`)} 
     </select>
    ` 
    
}


async function getCh(name){
    const response = await fetch(`${api}?name=${name}`);
    const data = await response.json();

    // content.innerHTML = `<h2>${data[0].name}
    //                         (${data[0].nickname})  
    // </h2>`
    img.src = `${data[0].img}`
    nom.innerHTML = `<h5>${data[0].name}</h5>`
    nickname.innerHTML = `<h5>${data[0].nickname}</h5>`
    birthday.innerHTML = `<h5>${data[0].birthday}</h5>`
    category.innerHTML = `<h5>${data[0].category}</h5>`
    occupation.innerHTML = `<h5>${data[0].occupation}</h5>`
    portrayed.innerHTML = `<h5>${data[0].portrayed}</h5>`
    status.innerHTML = `<h5>${data[0].status}</h5>`

}




getData();
