export function createModal(id, array) {
    const divDialog = document.createElement("div")
    const contentUser = document.createElement("div")
    const contentInfoUser = document.createElement("div")
    const img = document.createElement("img")
    const name = document.createElement("h2")
    const stack = document.createElement("p")

    const divPost = document.createElement("div")
    const title = document.createElement("h2")
    const close = document.createElement("button")
    const text = document.createElement("p")

    
    const foundPost = array.find(post => post.id === Number(id))
    
    divDialog.setAttribute("class", "divDialog")
    contentUser.setAttribute("class", "contentUserModal")
    contentInfoUser.setAttribute("class", "infoUser")
    divPost.setAttribute("class", "divPostModal")
    close.setAttribute("class", "closeModal")

    close.innerText="x"
    img.src=foundPost.img
    name.innerText=foundPost.user
    stack.innerText=foundPost.stack
    title.innerText=foundPost.title
    text.innerText=foundPost.text

    contentInfoUser.append(name, stack)
    contentUser.append(img, contentInfoUser, close)
    divPost.append(title, text)
    divDialog.append(contentUser,divPost)

    return divDialog
}

export function closeModal() {
    const modal = document.querySelector(".modalContainer")
    const closeButton = document.querySelector(".closeModal")

    closeButton.addEventListener("click", () => {
        modal.close()
    })
}