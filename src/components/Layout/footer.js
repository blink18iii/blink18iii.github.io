import './footer.scss'

const Footer = () => {
  return (
    <footer>
      <div className="footer" id="bubble-wrapper">
        <h1>© {new Date().getFullYear()}</h1>
      </div>
    </footer>
  )
}

// const wrapper = document.getElementById('bubble-wrapper')

// const animateBubble = (x) => {
//   const bubble = document.createElement('div')

//   bubble.className = 'bubble'
//   bubble.style.left = `${x}px`

//   wrapper.appendChild(bubble)

//   setTimeout(() => wrapper.removeChild(bubble), 2000)
// }

// window.onmousemove = (e) => animateBubble(e.clientX)

export default Footer
