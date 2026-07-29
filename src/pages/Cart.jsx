import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CartItem from '../components/cart/CartItem'
import CartSummary from '../components/cart/CartSummary'
import { clearCart } from '../redux/slices/cartSlice'
import { toast } from 'react-hot-toast'

function Cart() {
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  return (
    <>
      <Header />
      <main className="page">
        <div className="container">
          <div className="section-title">
            <div><h2>Your cart</h2><p>{items.reduce((s, i) => s + i.quantity, 0)} item(s) ready for checkout.</p></div>
            {items.length > 0 && <button className="clear-cart" onClick={() => { dispatch(clearCart()); toast.success('Cart cleared') }}>Clear cart</button>}
          </div>
          {!items.length ? (
            <div className="empty cart-empty"><div className="empty-icon">🛒</div><h2>Your cart is empty</h2><p className="muted">Add some products and they will appear here.</p><Link className="hero-btn" to="/products">Start shopping →</Link></div>
          ) : (
            <div className="cart-layout">
              <div className="cart-items">{items.map(item => <CartItem key={item.id} item={item} />)}</div>
              <CartSummary />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Cart
