const formPost = document.querySelector("#formPost")
const titlePost = document.querySelector("#titlePost")
const contentPost = document.querySelector("#contentPost")
const btnSubmit = document.querySelector("#btnSubmit")
const titleRender = document.querySelector(".titleRender")
const contentRender = document.querySelector(".contentRender")

formPost.addEventListener("submit", (e) =>{
    e.preventDefault()
    enviarDados(comuicacaoApi(titlePost.value, contentPost.value))
    renderizarConteudo(titlePost.value, contentPost.value)
})

function comuicacaoApi(titlePost, contentPost){
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

function enviarDados(apiPost){
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

function renderizarConteudo(titlePost, contentPost){
    titleRender.textContent = titlePost
    contentRender.textContent = contentPost
}
