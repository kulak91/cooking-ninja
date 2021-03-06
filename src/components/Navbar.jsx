import {Link} from 'react-router-dom'
import Search from './SearchBar'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
        <nav>
            <Link to="/" className='brand'><h1>Cooking Ninjas</h1></Link>
            <Search />
            <Link to="/register" className='register'>SignUp</Link>
            <Link to="/create">Create Recipe</Link>

        </nav>
    </div>
  )
}
