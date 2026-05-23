import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <h1>Jibin</h1>

      <div className="footer-icons">
        <FaGithub />
        <FaLinkedin />
        <FaTwitter />
      </div>
    </footer>
  )
}

export default Footer