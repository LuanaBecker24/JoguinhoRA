const target1 = document.getElementById("target1");
const target2 = document.getElementById("target2");
const target3 = document.getElementById("target3");
const target4 = document.getElementById("target4");
const target5 = document.getElementById("target5");
const atual = 1;

target1.addEventListener("targetFound", (event) => {
  atual = 2;
  alert("Você acertou o primeiro livro! Vamos ver se conhece o resto!");
  alertas();
});

target2.addEventListener("targetFound", (event) => {
  atual = 3;
  alert("Parece que temos alguém dos clássicos aqui... Seguiremos, então!");
  alertas();
});

target3.addEventListener("targetFound", (event) => {
  atual = 4;
  alert("Ah, esse foi fácil, né? Vamos ver agora..");
  alertas();
});

target4.addEventListener("targetFound", (event) => {
  atual = 5;
  alert(
    "Conseguiu pronunciar o nome? Ainda bem que não precisa! Vamos ao último..."
  );
  alertas();
});

target5.addEventListener("targetFound", (event) => {
  atual = 6;
  alert("Parabéns! Diz aí, gostou? Eu sei que sim ;)");
  alertas();
});

function alertas() {
  if (atual == 1) {
    alert("Não é minha culpa, é das..");
  }
  if (atual == 2) {
    alert(
      "No Brasil me criei, quase padre me tornei, se minha esposa é fiel nunca saberei..."
    );
  }
  if (atual == 3) {
    alert("Trago o símbolo de Zeus na testa (n°7 da coleção)");
  }
  if (atual == 4) {
    alert(
      " Pode me encontrar em 1947, no esconderijo do  nº 263 de Prinsengracht"
    );
  }
  if (atual == 5) {
    alert("Vivo no meu próprio mundinho, apenas eu e minha rosa...");
  }
}

alertas();
