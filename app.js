const button = document.getElementById("sortear");
button.addEventListener("click", () => {
  const maxNumber = document.getElementById("maxNumber").value;
  const randomNumber = Math.floor(Math.random() * (parseInt(maxNumber) + 1));
  const resultado = document.getElementById("resultado");
  resultado.innerText = `O número sorteado é: ${randomNumber}`;
  resultado.style.animation = "highlight 2s"; // adiciona a animação
  var roleta = document.querySelector('.roleta');
  roleta.classList.add('animate');
  
});
