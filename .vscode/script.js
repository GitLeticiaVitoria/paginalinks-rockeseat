function toggleMode() {
  //o ponto é o que faz acesso ao documento
  const html = document.documentElement //fazendo a criação de uma variavel html, onde ela recebe o documento html do nosso projeto
  html.classList.toggle("light") //funcao ja desenvolvida

  //outra opção:
  //if (html.classList.contains("light")) { //verifica se o html possui/está no metodo light
  //html.classList.remove("light") //se houver/estiver, ele remove
  //} else {
  //html.classList.add("light") //se não houver/estiver, ele adiciona

  //alteração da imagem de avatar durante a troca de tema
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/icone-light.png") //adicionar, modificar um atributo
  } else {
    img.setAttribute("src", "./assets/icone-dark.png")
  }
}
