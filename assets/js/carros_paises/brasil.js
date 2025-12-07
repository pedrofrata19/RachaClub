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

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element));

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


 