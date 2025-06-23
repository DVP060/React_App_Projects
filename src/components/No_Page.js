import {Outlet, Link} from  'react-router-dom';

export default function No_Page() {
  return (
    <>
        <div className="container my-3 d-flex text-center justify-content-center align-items-center vh-100">
          <div className="text-center">
            <h1>404</h1>
            <div class="emoji">😕</div>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link className="nav-link" to="/">Go Back Home</Link>
          </div>
        </div>
        <Outlet />
    </>
  )
}
