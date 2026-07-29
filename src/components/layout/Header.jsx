import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'
import { categories } from '../../utils/constants'
import { setCategory } from '../../redux/slices/productSlice'
import { toast } from 'react-hot-toast'

function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)
  const cartCount = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0))
  const wishlistCount = useSelector(state => state.wishlist.items.length)

  const handleLogout = () => {
    dispatch(logout())
    toast.success('Logged out successfully')
    navigate('/login')
  }

  const chooseCategory = (category) => {
    dispatch(setCategory(category))
    navigate('/products')
  }

  return (
    <>
      <header className="header">
        <div className="container header-main">
          <Link to="/dashboard" className="brand">
            <span className="brand-mark">K</span>
            <span><strong>Krish</strong>Mart<small>Everything in one place</small></span>
          </Link>

          <Link to="/products" className="header-search">
            <span>⌕</span>
            <span>Search products, brands and more...</span>
          </Link>

          <div className="header-actions">
            <span className="welcome">Hi, {user?.name?.split(' ')[0] || 'Shopper'}</span>
            <Link to="/cart" className="header-icon">🛒 <b>{cartCount}</b></Link>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>

        <nav className="category-bar">
          <div className="container category-scroll">
            {categories.map(category => (
              <button key={category} onClick={() => chooseCategory(category)}>
                {category}
              </button>
            ))}
            <Link to="/products" className="all-products-link">All Products →</Link>
          </div>
        </nav>
      </header>
      <div className="mini-strip">
        <div className="container mini-strip-inner">
          <span>🚚 Free delivery over £50</span>
          <span>↩ Easy returns</span>
          <span>🔒 Secure checkout</span>
          <span>♡ {wishlistCount} wishlist item{wishlistCount === 1 ? '' : 's'}</span>
        </div>
      </div>
    </>
  )
}

export default Header
