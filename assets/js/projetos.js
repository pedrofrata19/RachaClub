let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 10000);

function nextImage() {
  count++;
  if (count > 5) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

function prevImage() {
  count--;
  if (count < 1) {
    count = 5;
  }
  document.getElementById("radio" + count).checked = true;
}

document.querySelector(".direita").addEventListener("click", nextImage);
document.querySelector(".esquerda").addEventListener("click", prevImage);

const botaoTema = document.getElementById("btnTema");
const temaSalvo = localStorage.getItem("tema");
if (temaSalvo === "escuro") {
  document.body.classList.add("dark");
}

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("white")) {
    localStorage.setItem("tema", "escuro");
  } else {
    localStorage.setItem("tema", "claro");
  }
});

document.getElementById("formSugestao").addEventListener("submit", function () {

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("mensagem").value;

  if (!msg || msg.trim() === "") {
    alert("Obrigado pela sugestão! Nossa equipe avaliará sua sugestão e entrará em contato.");
  } else {
    alert("Mensagem inválida. Tente novamente.");
  }
});

const btn = document.getElementById('btnTema');
const mensagem = document.getElementById('mensagem');

btn.addEventListener('click', () =>{

mensagem.classList.toggle('show');
if(mensagem.classList.contains('show')){
    btn.textContent = '☼';
}
else{
    btn.textContent = '☾';
}
});
