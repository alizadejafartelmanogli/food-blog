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
