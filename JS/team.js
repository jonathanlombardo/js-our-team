const team = [
  {
    name: "Jonathan Lombardo",
    role: "The MemeMan",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Vincenzo Mercadante",
    role: "The Machine",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Nicola Gallo",
    role: "The SuperPartes",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Michele Ianni",
    role: "The BigPrinter",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Simone Pucci",
    role: "The Pari Nine Man",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Mattia Teoria",
    role: "The CalmKeeper",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

const rowEl = document.querySelector("#cards-row");
const titleEl = document.querySelector("#title");
const subtitleEl = document.querySelector("#subtitle");

writingDelay("OUR TEAM", titleEl, 80);
writingDelay("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id vitae perferendis molestiae natus. Obcaecati, incidunt?", subtitleEl, 0);

for (let member of team) {
  rowEl.innerHTML += `
  <div class="col-4">
    <div class="card">
      <img src="./img/${member.image}" class="card-img-top" alt="${member.name} (pic)" />
      <div class="card-body text-center">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
      </div>
    </div>
  </div>
  `;
}

const nameElements = document.querySelectorAll("#cards-row .card-title");
const roleElements = document.querySelectorAll("#cards-row .card-text");

for (let [i, member] of team.entries()) {
  writingDelay(member.name, nameElements[i], 80);
  writingDelay(member.role, roleElements[i], 80);
}
