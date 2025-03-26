

const ListeDHabille= [{
    "Table": "t-shirt",
    "Price": 15,
},{
    "Table": " jeans",
    "Price": 20,
},{
    "Table": "chaussure",
    "Price": 50 ,
}];
let Pannier = [];

function displayEvenNumbers() {
    let list = document.getElementById("evenNumbers");
    evenNumbers.innerHTML = "";

    for (let i = 0; i < ListeDHabille.length ; i++) {
            let p = document.createElement("p");	
            p.textContent = `${ListeDHabille.Table} -${ListeDHabille.Price}`;
            list.appendChild(p);

            let button = document.createElement("button");	
            button.textContent =`acheter`;
          /*  list.appendChild(button)*/

            button.addEventListener("click");
    }
}

displayEvenNumbers();  
