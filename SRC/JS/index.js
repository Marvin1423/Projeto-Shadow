const botaoTrailer = document.querySelector(".botao-trailer");
console.log(botaoTrailer);
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function altenarModal (){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    altenarModal ();
})

fecharModal.addEventListener("click", () => {
    altenarModal ();
    video.setAttribute ("src", linkDoVideo)
})