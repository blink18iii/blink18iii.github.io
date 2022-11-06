import './bg.scss'

const createStars = (type, quantity) => {
  for (let i = 0; i < quantity; i++) {
    var star = document.createElement('div')
    // add little rotation to the stars
    star.classList.add('star', `type-${type}`)
    star.style.left = `${randomNumber(7, 250)}%`
    star.style.bottom = `${randomNumber(5, 220)}%`
    star.style.animationDuration = `${randomNumber(9, 255)}s`
    // star.style.rotate = `${randomNumber(5, 250)}deg`
    document.body.appendChild(star)
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min * 0.33
}

createStars(1, 87)
createStars(2, 85)
createStars(3, 10)

export default createStars
