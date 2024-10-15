let count = 0
let counter = document.getElementById('count-el')
let entries = document.getElementById('entries')


function increment() {
    count++
    counter.innerHTML = count
}


function save() {
    entries.innerHTML += ` ${count} -`
}
