import PropTypes from 'prop-types'
import {Outlet, Link} from 'react-router-dom';

function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/about">About</a> */}
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <IsNotLogin />
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

function IsNotLogin(){
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="/">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Sign Up</a>
      </li>
    </>
  );
}

// function IsLoggedIn(){
//   return (
//     <>
//       <li className="nav-item">
//         <a className="nav-link" href="/">{user.username}</a>
//       </li>
//     </>
//   );
// }

Navbar.propTypes = {title : PropTypes.string.isRequired}
Navbar.defaultProps = {title:"NavBar"};

export default Navbar;