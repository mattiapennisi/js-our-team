/*
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina
*/

// Variables

const header = document.querySelector('#header')
const main = document.querySelector('#main')
const footer = document.querySelector('#footer')
const memberForm = document.querySelector('#memberForm')
const submitButton = document.querySelector('#submitButton')
const cards = document.querySelector('#cards')

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

memberForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const name = document.querySelector('#nameText').value
  const role = document.querySelector('input[name="roleText"]').value
  const image = document.querySelector('input[name="imageText"]').value

  let member = {
      name,
      role,
      img
  }

  const markup = generatesCard(member)

  cards.innerHTML += markup

  memberForm.reset()
})

function generatesCard(memberObj) {

  const {name, role, img} = memberObj

  const markup = `
  <div class="card col-4">
      <img src="${img}" alt="" class="card-image-top">
      <div class="card-body">
          <h3>${name}</h3>
          <p>${role}</p>
      </div>
  </div>
  `

  return markup
}

function getMembersItems(obj, section) {

  for (let i = 0; i < obj.length; i++) {
      section.innerHTML += generatesCard(obj[i])
  }
}

getMembersItems(teamMembers, cards)