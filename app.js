let inp = document.querySelector('#filter');
let result = document.querySelector('.result');
let ul = document.querySelector('ul');
let resultFilter = [];


random();
inp.addEventListener('input',(e)=> {
    FilterName(e.target.value)
})
async function random() {
    const res = await fetch('https://randomuser.me/api?results=60')
    const { results } = await res.json()

   results.forEach((result)=> {
        let li = document.createElement('li');
        li.innerHTML = `
        <img src=" ${result.picture.large} " >
        <div class="user-info">
            <h4> ${result.name.first} ${result.name.last}</h4>
            <p> ${result.location.city} ${result.location.country}</p>
        </div>`
        resultFilter.push(li);
        ul.appendChild(li);
    })
   

}
function FilterName(search){
    
resultFilter.forEach((e)=> {
    if(e.innerText.toLowerCase().includes(search.toLowerCase())) {
        e.classList.remove('hide');
    } else {
        e.classList.add('hide');
    }
})
}