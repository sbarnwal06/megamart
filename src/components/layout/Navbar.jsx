import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="simple-nav">
      <Link to="/dashboard">Home</Link>
      <Link to="/products">Shop</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  )
}

export default Navbar
