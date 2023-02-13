import { render } from "./render.js"

export function registerNewPost (array){
    const userNewPost = document.querySelector(".nameUserNewPost")
    const stackNewPost = document.querySelector(".stackUserNewPost")
    const title = document.querySelector("input")
    const description = document.querySelector("textarea")
    const imgUserNewPost = document.querySelector(".imgUserNewPost")
   
    const newPost = {
        id: array.length + 1,
        title: title.value,
        text: description.value,
        user: userNewPost.innerText,
        stack: stackNewPost.innerText,
        img: imgUserNewPost.src,
        likes: 0
    }
    array.unshift(newPost)
}

export function registerEvent(array){
    const submitButton = document.querySelector(".buttonPubli")
    const title = document.querySelector("input")
    const description = document.querySelector("textarea")

    submitButton.addEventListener("click", (event) => {
        event.preventDefault()

        if(title.value=="" || description.value==""){
            registerNewPost()
        }

        registerNewPost(array)
        render(array)

        title.value=""
        description.value=""
    })
}