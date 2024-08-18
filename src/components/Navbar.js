import propTypes from 'prop-types'
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} text-${props.rMode}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.rMode}`} href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink 
              className={`nav-link active text-${props.rMode}`} 
              style={({isActive})=>({fontWeight: isActive ? 'bold' : 'normal'})} aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={({isActive})=>({fontWeight: isActive ? 'bold' : 'normal'})} className={`nav-link text-${props.rMode}`} to="/about">About</NavLink>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
        </div>
        <div className="form-check form-switch mx-3">
          <input className="form-check-input" onClick={props.greenishMode} type="checkbox" role="switch" name='mode' id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">greenish Mode</label>
        </div>
        <div className="form-check form-switch mx-3">
          <input className="form-check-input" onClick={props.bluishMode} type="checkbox" role="switch" name='mode' id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">bluish Mode</label>
        </div>
        <div className="form-check form-switch mx-3">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" name='mode' id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: propTypes.string.isRequired
}

Navbar.defaultProps = {
  title: 'set title here'
}