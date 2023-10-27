function togglemode() {
    const html= document.documentElement

    // if (html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }
    
    html.classList.toggle("light")

    // pegar a tag img

   const img = document.querySelector("#profile img")

   // substituir a imagem
    if(html.classList.contains("light")) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-cogumelo-light.png")

   } else {
    // se river sem light mode, manter a imagem noraml
    img.setAttribute("src", "./assets/avatar-cogumelo.png")
   }

    
    
    
}