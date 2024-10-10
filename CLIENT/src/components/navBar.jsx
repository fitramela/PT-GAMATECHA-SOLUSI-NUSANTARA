import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const nav = useNavigate()


    return (
        <div className="navbar bg-base-100 drop-shadow-md">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>User</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            {localStorage.access ? (
                <li><a onClick={() => {localStorage.removeItem('access'); nav('/login')}}>Logout</a></li>
            ) : (
                <li><a onClick={() => nav('/login')}>Login</a></li>
            )}
            
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    )
}

export default NavBar