// Copiar texto
function copiarTexto(idCaixaTexto) {
  var texto = document.getElementById(idCaixaTexto).value;
  navigator.clipboard.writeText(texto).then(function() {
      alert("Texto copiado com sucesso!");
  }, function() {
      alert("Erro ao copiar o texto.");
  });
}

// Relógio Digital
function updateClock() {
  const clockElement = document.querySelector(".clock");
  const hoursElement = clockElement.querySelector(".hours");
  const minutesElement = clockElement.querySelector(".minutes");
  const secondsElement = clockElement.querySelector(".seconds");

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

updateClock();
setInterval(updateClock, 1000);
