async function getAllUsers(){
    let response = await fetch("http://localhost:8080/api/users")
    if (response.ok){
        let users = await response.json();
        let user = document.querySelector('.user')
        for (let i = 0; i < users.length; i++) {
            let userName = document.createElement('h3')
            userName.textContent = users[i].name
            user.appendChild(userName)

            let userEmail = document.createElement('h6')
            userEmail.textContent = users[i].email
            user.appendChild(userEmail)
        }
    }
}

function getUserParameters(){
    let userName = document.getElementById('name')
    let userEmail = document.getElementById('email')
    let userPassword = document.getElementById('password')
    return{
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value
    }
}

async function addUser(){
    let user = getUserParameters()
    let response = await fetch('http://localhost:8080/api/users/add', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })
    if (response.ok)
        window.location = "http://localhost:8080/users.html"
}
