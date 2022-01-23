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
            details.textContent = "Детальнее"
            post1.appendChild(details)
        }
    }
}