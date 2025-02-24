// Variables

const main = document.querySelector('#main')
const memberForm = document.querySelector('#memberForm')
const submitButton = document.querySelector('#submitButton')
const cards = document.querySelector('#cards')

// Array with team members objects
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

// Functions declaration

// Function that enters all existing team members in a container from an object
function getMembersItems(obj, section) {

  for (let i = 0; i < obj.length; i++) {
      section.innerHTML += generatesCard(obj[i])
  }
}

// Function that generates a card from an object
function generatesCard(memberObj) {

  const {name, role, img, email} = memberObj

  const markup = `
  <div class="card col-4 bg-dark text-light display-flex flex-row">
      <img src="${img}" alt="" class="card-image-top" width="100px" height="99px">
      <div class="card-body">
          <h3 class="h6">${name}</h3>
          <p>${role}</p>
          <p class="text-info">${email}</p>
      </div>
  </div>
  `

  return markup
}

// It generates all existing team members cards
getMembersItems(teamMembers, cards)

// It generates new team members cards on form submitting
memberForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const name = document.querySelector('input[name="nameText"]').value
  const role = document.querySelector('input[name="roleText"]').value
  const image = document.querySelector('input[name="imageText"]').value
  const email = document.querySelector('input[name="emailText"]').value

  let member = {
      name,
      role,
      image,
      email
  }

  const markup = generatesCard(member)

  cards.innerHTML += markup

  memberForm.reset()
})