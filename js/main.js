// localStorage.clear();
localStorage.setItem('name', "Imran");
localStorage.setItem("age", 25);
const name = localStorage.getItem('name')
console.log(name)
localStorage.removeItem('name');
const obj = {
    firstName : "Abraham",
    lastName : "Linklon"
}
localStorage.setItem('person', JSON.stringify(obj));

const pElement = document.getElementById("counter");
const countBtn = document.getElementById("count")
let count = 0;
// localStorage.setItem('count', count)
if(localStorage.getItem('count')){
    count = parseInt(localStorage.getItem('count'))
}
pElement.innerText = count;

countBtn.addEventListener ('click', function(event){
    // event.preventDefault();
    count = parseInt(count) + 1;
    localStorage.setItem('count', pElement.innerText);
    pElement.innerText = count;
    return count;
})
// counter()
// localStorage.setItem('count', count)


