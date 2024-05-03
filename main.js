let content = document.querySelector('.content');
        host = getHost(); 
        let flowers = []; 
        displayFlowers(); 
        
async function getFlowers() {
    try {
        
        let response = await fetch(`${host}/flowers`, );
        if (response.status == 401){
            logout(); 
        }
        if (response.ok) {
            let data = await response.json();
           
            return data
        } else {
            alert("Something went wrong fetching the flowers!");
        }
    } catch (error) {
        console.error("Error fetching flowers:", error);
        alert("An error occurred while fetching the flowers!");
    }
}

async function displayFlowers() {
    flowers = await getFlowers();
    console.log(flowers);
    flowers.sort((a,b) => a.price - b.price);
    let flowerContainer = document.createElement('div');
    flowerContainer.classList.add('flower-container');

    for (let i = 0; i < flowers.length; i++) {
        let flower = flowers[i];
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="static/${flower.id}.jpg" alt="${flower.name}" width="400px" height="400px" onclick="getToBasket('${flower.id}')">
            <p>${flower.description}</p>
            <p><span>from </span>$${flower.price}</p>
            
        `;
        flowerContainer.appendChild(card);
    }

    content.appendChild(flowerContainer);
}

function typeFilter(type) {

    let filteredFlowers = flowers.filter(flower => flower.type == type);
    let flowerContainer = document.querySelector('.content');
    flowerContainer.innerHTML = '';

    for (let i = 0; i < filteredFlowers.length; i++) {
        let flower = filteredFlowers[i];
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="static/${flower.id}.jpg" alt="${flower.name}" width="400px" height="400px" onclick="getToBasket('${flower.id}')">
            <p>${flower.description}</p>
            <p><span>from </span>$${flower.price}</p>
           
        `;
        flowerContainer.appendChild(card);
    }
}
function OccasionFilter(type) {

let filteredFlowers = flowers.filter(flower => flower.occasion == type);
let flowerContainer = document.querySelector('.content');
flowerContainer.innerHTML = '';

for (let i = 0; i < filteredFlowers.length; i++) {
    let flower = filteredFlowers[i];
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="static/${flower.id}.jpg" alt="${flower.name}" width="400px" height="400px"  onclick="getToBasket('${flower.id}')">
        <p>${flower.description}</p>
        <p><span>from </span>$${flower.price}</p>
        
    `;
    flowerContainer.appendChild(card);
}
}

function colorFilter(type) {

let filteredFlowers = flowers.filter(flower => flower.color == type);
let flowerContainer = document.querySelector('.content');
flowerContainer.innerHTML = '';

for (let i = 0; i < filteredFlowers.length; i++) {
    let flower = filteredFlowers[i];
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="static/${flower.id}.jpg" alt="${flower.name}" width="400px" height="400px" onclick="getToBasket('${flower.id}')">
        <p>${flower.description}</p>
        <p><span>from </span>$${flower.price}</p>
        
    `;
    flowerContainer.appendChild(card);
}
}

function sort() {
let select = document.getElementById('sort');

console.log(select.value);
if (select.value == 'Low To High') {
    flowers.sort((a, b) => a.price - b.price);
} else if (select.value == 'High To Low') {
    flowers.sort((a, b) => b.price - a.price);
}

console.log(flowers);
let flowerContainer = document.querySelector('.content');
flowerContainer.innerHTML = '';

for (let i = 0; i < flowers.length; i++) {
    let flower = flowers[i];
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="static/${flower.id}.jpg" alt="${flower.name}" width="400px" height="400px" onclick="getToBasket('${flower.id}')">
        <p>${flower.description}</p>
        <p><span>from </span>$${flower.price}</p>
        
    `;
    flowerContainer.appendChild(card);
}
}

function getToBasket(id) {
    localStorage.setItem('flowerId', id);
    console.log(localStorage.getItem('flowerId'));
    window.location.href = 'basket.html';

}

