// Adiciona um evento de clique em cada link do menu suspenso
document.querySelectorAll('.dropdown-menu a').forEach(link => {
  link.addEventListener('click', e => {
    // Previne o comportamento padrão do link (que é navegar para outra página)
    e.preventDefault();
    // Obtém a ID do parágrafo que deve ser exibido (a partir do atributo "href" do link)
    const targetId = link.getAttribute('href').substring(1);
    // Oculta todos os parágrafos com a classe "menu-item-content"
    document.querySelectorAll('.menu-item-content').forEach(item => {
      item.classList.add('d-none');
    });
    // Exibe o parágrafo correto
    document.getElementById(targetId).classList.remove('d-none');
  });
});

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