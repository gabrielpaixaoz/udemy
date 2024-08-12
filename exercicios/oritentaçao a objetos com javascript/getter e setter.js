class Post{
    constructor(titulo, descricao, tags){
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }
    get exibirTitulo(){
    return `Voce esta lendo: ${this.titulo}`    
    }
    set adicionarTags(tags){
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "é um post sobre programção")

console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "programaçao, javascript, js"

console.log(myPost)

    