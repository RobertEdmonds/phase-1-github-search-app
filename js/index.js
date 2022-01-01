document.querySelector('form').addEventListener('submit', render)
function search(name){
 
    let li = document.createElement('li')
    let secondLi = document.createElement('li')
    let img = document.createElement('img')
    li.textContent = `Username: ${name.login}`
    img.src = name.avatar_url
    secondLi.textContent = `Profile: ${name.html_url}`
    img.addEventListener('click',()=> renderRepo(`${name.login}`))
    li.append(img, secondLi)
    document.querySelector('#user-list').appendChild(li)
}
function repo(name){
    let li = document.createElement('li')
    li.textContent = name.name
    document.querySelector('#repos-list').appendChild(li)
}
function render(name){
    name.preventDefault()

    fetch(`https://api.github.com/search/users?q=${name.target[0].value}`)
    .then(resp => resp.json())
    .then(json => json.items.forEach(search))
}

function renderRepo(name){
    fetch(`https://api.github.com/users/${name}/repos`)
    .then(resp => resp.json())
    .then(json => json.forEach(repo))
}