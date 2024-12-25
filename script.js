const botao = document.getElementById("butao");
const imagem = document.getElementById("peru");
const texto = document.getElementById("texto");
const brincadeira = document.getElementById("brincadeira");

botao.addEventListener("click", () => {
  imagem.style.visibility = "visible";
  texto.innerHTML = "Um peruzao para lidia leticia HEHE";
  brincadeira.innerHTML = "To Brincando Moh HEHE";
});
