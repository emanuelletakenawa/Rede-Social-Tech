import { createModal, closeModal } from "./modal.js"

export function render (array){
    const posts = document.querySelector(".posts")
    const divPostContainer = document.querySelector(".divPostContainer")
    
    divPostContainer.innerHTML = ""

    array.forEach(post => {
        const card = createPost(post)

        posts.appendChild(card)
    })
    
    
    renderModal(array)
}


function createPost(post){
    
    const divPostContainer = document.querySelector(".divPostContainer")
    
    const contentUser = document.createElement("div")
    const contentInfoUser = document.createElement("div")
    const img = document.createElement("img")
    const name = document.createElement("h2")
    const stack = document.createElement("p")
    
    const title = document.createElement("h2")
    const text = document.createElement("p")
    
    const divActionPost = document.createElement("div")
    const btnOpen = document.createElement("button")
    const btnLike = document.createElement("button")
    const likes = document.createElement("span")
    
    contentUser.setAttribute("class", "contentUser")
    contentInfoUser.setAttribute("class", "infoUser")
    divActionPost.setAttribute("class", "divActionPost")
    btnOpen.setAttribute("class", "btnOpen")
    btnLike.setAttribute("class", "btnLike")
    likes.setAttribute("class", "countLike")
    
    img.src=post.img
    name.innerText=post.user
    stack.innerText=post.stack
    
    title.innerText=post.title
    text.innerText=post.text
    
    btnOpen.innerText="Abrir Post"
    btnOpen.dataset.postId = post.id
    btnLike.innerHTML= "<img src = ./src/assets/img/grayHeart.png class=like>"

    let count = post.likes
    likes.innerText= count
    
    btnLike.addEventListener("click", (event) => {

        if(event.target.src){
            
            if(count == post.likes){
                event.target.src = "./src/assets/img/redHeart.png"
                count += 1
            }else{
                event.target.src = "./src/assets/img/grayHeart.png"
                count -= 1
            }

            likes.innerText = count
        }
    })
        
    contentInfoUser.append(name, stack)
    contentUser.append(img, contentInfoUser)
    divActionPost.append(btnOpen, btnLike, likes)
    divPostContainer.append(contentUser,title, text,divActionPost)
    
    return divPostContainer
}

export function renderModal(array) {
    const modal = document.querySelector(".modalContainer")
    const buttons = document.querySelectorAll(".btnOpen")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const modalContent = createModal(button.dataset.postId, array)

            modal.innerHTML= ""

            modal.appendChild(modalContent)

            modal.showModal()

            closeModal()
        })
    })
}