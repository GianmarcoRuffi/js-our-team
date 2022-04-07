// Viene fornito un layout di base in cui è presente una card di esempio inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e dovrà quindi essere rimossa dall’html.
// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html, stampare dinamicamente una card per ogni membro del team.
// BONUS:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.

// Esempio card

let teamMembers = [];

teamMembers.push(
  {
    picture: "img/wayne-barnett-founder-ceo.jpg", //image
    firstName: "Wayne", //first name
    lastName: "Barnett", // second name
    role: "Founder & CEO", // role
  },

  {
    picture: "img/angela-caroll-chief-editor.jpg", //image
    firstName: "Angela", //first name
    lastName: "Caroll", // second name
    role: "Chief Editor", // role
  },

  {
    picture: "img/walter-gordon-office-manager.jpg", //image
    firstName: "Walter", //first name
    lastName: "Gordon", // second name
    role: "Office Manager", // role
  },
  {
    picture: "img/angela-lopez-social-media-manager.jpg", //image
    firstName: "Angela", //first name
    lastName: "Lopez", // second name
    role: "Social media manager", // role
  },
  {
    picture: "img/scott-estrada-developer.jpg", //image
    firstName: "Scott", //first name
    lastName: "Estrada", // second name
    role: "Developer", // role
  },
  {
    picture: "img/barbara-ramos-graphic-designer.jpg", //image
    firstName: "Barbara", //first name
    lastName: "Ramos", // second name
    role: "Graphic Designer", // role
  }
);

console.log(teamMembers);

document.querySelector(".team-container").innerHTML;

for (i = 0; i < teamMembers.length; i++) {
  document.querySelector(".team-container").innerHTML += `
  <div class="team-card">
  <div class="card-image">
    <img
      src="${teamMembers[i].picture}"
      alt=""
    />
  </div>
  <div class="card-text">
    <h3>${teamMembers[i].firstName} ${teamMembers[i].lastName}</h3>
    <p>${teamMembers[i].role}</p>
  </div>
  </div>
`;
}
