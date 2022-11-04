import './bg.scss'

const createStars = (type, quantity) => {
  for (let i = 0; i < quantity; i++) {
    var star = document.createElement('div')
    star.classList.add('star', `type-${type}`)
    star.style.left = `${randomNumber(1, 199)}%`
    star.style.bottom = `${randomNumber(1, 199)}%`
    star.style.animationDuration = `${randomNumber(50, 200)}s`
    document.body.appendChild(star)
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min
}

createStars(1, 87)
createStars(2, 85)
createStars(3, 30)

export default createStars
