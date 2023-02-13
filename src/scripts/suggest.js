export function renderSuggest(array){
    const divSuggest = document.querySelector(".contentDivSuggest")
    
    array.forEach(cardUserSuggest => {
        const card = createCard(cardUserSuggest)
        divSuggest.appendChild(card)
    })
}


function createCard(cardUserSuggest) {

    const userSuggest = document.createElement("div")
    const contentUser = document.createElement("div")
    const contentInfoUser = document.createElement("div")
    const img = document.createElement("img")
    const name = document.createElement("h2")
    const stack = document.createElement("p")
    const buttonFollow = document.createElement("button")
    
    userSuggest.setAttribute("class", "userSuggest")
    contentUser.setAttribute("class", "contentUser")
    contentInfoUser.setAttribute("class", "infoUser")
    buttonFollow.setAttribute("class", "btnFollow")
    
    img.src=cardUserSuggest.img
    name.innerText=cardUserSuggest.user
    stack.innerText=cardUserSuggest.stack
    buttonFollow.innerText="Seguir"

    buttonFollow.addEventListener("click", () => {
        buttonFollow.classList.toggle("following")
        
        if(buttonFollow.innerText == "Seguir"){
            buttonFollow.innerText = "Seguindo"
        }else{
            buttonFollow.innerText = "Seguir"
        }
    })

    contentInfoUser.append(name, stack)
    contentUser.append(img, contentInfoUser)
    userSuggest.append(contentUser,buttonFollow)
    
    return userSuggest
}