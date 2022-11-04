import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <p>© {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer