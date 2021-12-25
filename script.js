const checkbox = document.querySelector('.checkbox')
const body = document.querySelector('body')
const header = document.querySelector('header')
const facebook = document.querySelector('.facebook')
const twitter = document.querySelector('.twitter')
const instagram = document.querySelector('.instagram')
const youtube = document.querySelector('.youtube')
const overviews = document.querySelectorAll('.social-card')

function darkMode() {
  body.classList.toggle('dark')
  header.classList.toggle('dark')
  facebook.classList.toggle('dark')
  twitter.classList.toggle('dark')
  instagram.classList.toggle('dark')
  youtube.classList.toggle('dark')
  overviews.forEach(cards => {
    cards.classList.toggle('dark')
  })
}

checkbox.addEventListener('click', darkMode)
