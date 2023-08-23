//Home-----------------------------------------------------------------
const home = document.querySelector('.btnOpenHome')

home.addEventListener('click', () => {
  window.location.reload();
})
//Profile---------------------------------------------------------------
const modalProfile = document.querySelector('.modal-windowProfile')

function openModalProfile() {
  modalProfile.classList.add('activeProfile')
}
function closeModalProfile() {
  modalProfile.classList.remove('activeProfile')
}
//Figma----------------------------------------------------------------
const modalfigma = document.querySelector('.modal-windowFigma')

function openModalFigma() {
  modalfigma.classList.add('activeFigma')
}
function closeModalFigma() {
  modalfigma.classList.remove('activeFigma')
}
//Projects-------------------------------------------------------------
const modalProjects = document.querySelector('.modal-windowProjects')

function openModalProjects() {
  modalProjects.classList.add('activeProjects')
}
function closeModalProjects() {
  modalProjects.classList.remove('activeProjects')
}
//Games----------------------------------------------------------------
const modalGames = document.querySelector('.modal-windowGames')

function openModalGames() {
  modalGames.classList.add('activeGames')
}
function closeModalGames() {
  modalGames.classList.remove('activeGames')
} 
//Linkedin-------------------------------------------------------------
const modalLinke = document.querySelector('.modal-windowLinke')

function openModalLinke() {
  modalLinke.classList.add('activeLinke')
}
function closeModalLinke() {
  modalLinke.classList.remove('activeLinke')
} 
//Github---------------------------------------------------------------
const modalGithub = document.querySelector('.modal-windowGithub')

function openModalGithub() {
  modalGithub.classList.add('activeGithub')
}
function closeModalGithub() {
  modalGithub.classList.remove('activeGithub')
}
//Instabram------------------------------------------------------------
const modalInsta = document.querySelector('.modal-windowInsta')

function openModalInsta() {
  modalInsta.classList.add('activeInsta')
}
function closeModalInsta() {
  modalInsta.classList.remove('activeInsta')
}
//Manual-----------------------------------------------------------------
const modalManual = document.querySelector('.modal-windowManual')

function openModalManual() {
  modalManual.classList.remove('activeManual')
}
function closeModalManual() {
  modalManual.classList.add('activeManual')
} 