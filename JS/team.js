const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

const rowEl = document.querySelector("#cards-row");

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
