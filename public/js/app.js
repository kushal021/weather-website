console.log('Client side Js');

const date = new Date();

const optionDate = {
    day: 'numeric',
    month: 'short'
}

const dt = date.toLocaleDateString('en-IN', optionDate)

const day = new Date();

const optionDay = {
    weekday: 'long'
}

const dy = day.toLocaleDateString('en-IN', optionDay)

console.log(dy);
console.log(dt);


const form = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#messageOne')
const msgTwo = document.querySelector('#messageTwo')


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    msgOne.textContent = 'Loading...'
    msgTwo.textContent = ''
    const location = search.value;
    const url = '/weather?address='+location;
    fetch(url).then((response)=>{
    response.json().then((data)=>{
        if (data.error) {
            msgOne.textContent = data.error
            console.log(data.error);
        }else{
            msgOne.textContent = data.address
            msgTwo.textContent = data.result
            console.log(data);
        }
    })
})
})