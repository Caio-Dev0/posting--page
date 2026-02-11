const formPost = document.querySelector("#formPost")
const titlePost = document.querySelector("#titlePost")
const contentPost = document.querySelector("#contentPost")
const btnSubmit = document.querySelector("#btnSubmit")
const titleRender = document.querySelector(".titleRender")
const contentRender = document.querySelector(".contentRender")

formPost.addEventListener("submit", (e) =>{
    e.preventDefault()
    sendData(comunicationApi(titlePost.value, contentPost.value))
    renderPost(titlePost.value, contentPost.value)
    validationMsgs(titlePost.value, contentPost.value)
})

function comunicationApi(titlePost, contentPost){
        const apiPost = fetch("https://jsonplaceholder.typicode.com/posts", { 
        method: "POST", 
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: titlePost,
            body:  contentPost,
            userId: 1
        })
    })
    return apiPost
}

function sendData(apiPost){
    apiPost.then(response =>{
        if(!response.ok){
            throw Error("Falha na requisição da API")
        }
       return response.json()
    })
    .then(data =>{
        console.log(data)
    })
}

function renderPost(titlePost, contentPost){
    titleRender.textContent = titlePost
    contentRender.textContent = contentPost
}

function validationMsgs(titlePost, contentPost){
    const valitationTitle = document.querySelector(".validationText--title");
    const valitationContent = document.querySelector(".validationText--content");
    if(titlePost === ""){
        valitationTitle.classList.add("showValidation")
    }else{
        valitationTitle.classList.remove("showValidation")
    }

     if(contentPost === ""){
        valitationContent.classList.add("showValidation")
    }else{
        valitationContent.classList.remove("showValidation")
    }
}


