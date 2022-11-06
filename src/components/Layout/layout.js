import Sidebar from '../Sidebar/sidebar'
import './layout.scss'
import { Outlet } from 'react-router-dom'
import createStars from './bg'
import Footer from './footer'

const Layout = () => {
  return (
    <div className="App">
      <createStars />
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
