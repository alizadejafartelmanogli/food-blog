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
    let response = await fetch("http://localhost:8080/api/posts/add", {
        method: 'POST',
        headers:{
            'Content-Type':'application/json;charset=utf-8'
        },
        body: JSON.stringify(post)
    })
    if (response.ok)
        window.location = "http://localhost:8080/blog.html";
}