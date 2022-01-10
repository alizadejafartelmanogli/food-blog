async function getAllPosts(){
    let response = await fetch ("http://localhost:8080/api/posts")

    if(response.ok){
        let posts = await response.json()
        let post1 = document.querySelector('.post')

        for (let i = 0; i < posts.length; i++) {

            let postHeader = document.createElement('h3')
            postHeader.textContent = posts[i].header
            post1.appendChild(postHeader)

            let postText = document.createElement('p')
            postText.textContent = posts[i].text
            post1.appendChild(postText)

            let details = document.createElement('a')
            details.href = "/post.html?id="+posts[i].id
            //"http://localhost:8080/api/posts/"+posts[i].i
            details.textContent = "Детальнее"
            post1.appendChild(details)
        }
    }
}

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