import PropTypes from 'prop-types'
import {Outlet, Link} from 'react-router-dom';
import {useState} from 'react';

function Navbar(props) {
  const [Mode, setMode] = useState(0);
  
  function handleMode(){
    if(Mode === 0)
    {
      setMode(1);
    }
    else
    {
      setMode(0);
    }
  }

  return (
    <>
      <nav className={Mode === 0 ? "navbar bg-light navbar-light navbar-expand-lg" : "navbar bg-dark navbar-dark navbar-expand-lg"}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/" state={{ Mode }}>Home</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/about">About</a> */}
                <Link className="nav-link" to="/about" state={{ Mode }}>About</Link>
              </li>
              <IsNotLogin />
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" value={Mode} onChange={handleMode} role="switch" id="switchCheckDefault" />
              <label className={Mode === 0 ? "form-check-label text-dark" : "form-check-label text-white"} htmlFor="switchCheckDefault">Dark Mode</label>
            </div>
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