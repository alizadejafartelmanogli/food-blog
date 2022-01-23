function getIdClient(){
    let searchParams = new URLSearchParams(document.location.search);
    return searchParams.get("id");
}

async function getPostById(id){
    let response = await fetch("http://localhost:8080/api/posts/"+id)
    let post = await response.json()

    let postHead = document.querySelector('.post-head')
    let postHead1 = document.createElement('h3')
    postHead1.textContent = post.header
    postHead.appendChild(postHead1)

    let postText = document.querySelector('.post-text')
    let postText1 = document.createElement('p')
    postText1.textContent = post.text
    postText.appendChild(postText1)
}

function getPostParameter(){
    let headerElement = document.getElementById('header')
    let anonsElement = document.getElementById('anons')
    let textElement = document.getElementById('text')
    return{
        header: headerElement.value,
        anons: anonsElement.value,
        text: textElement.value
    }
}

async function addPost(){
    let post = getPostParameter()
    let response = await fetch('http://localhost:8080/api/posts/add', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(post)
    })
    if (response.ok)
        window.location = 'http://localhost:8080/blog.html'
}