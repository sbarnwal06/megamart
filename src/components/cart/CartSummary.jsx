import { useSelector } from 'react-redux'
import { formatPrice, getDiscountedPrice } from '../../utils/helpers'

function CartSummary() {
  const items = useSelector(state => state.cart.items)
  const subtotal = items.reduce((sum, item) => sum + getDiscountedPrice(item.price, item.discount) * item.quantity, 0)
  const delivery = subtotal >= 50 || subtotal === 0 ? 0 : 4.99
  const discount = items.reduce((sum, item) => sum + ((item.price * item.discount) / 100) * item.quantity, 0)
  const total = subtotal + delivery

  return (
    <aside className="cart-summary">
      <h2>Order Summary</h2>
      <div><span>Items ({items.reduce((s, i) => s + i.quantity, 0)})</span><strong>{formatPrice(subtotal)}</strong></div>
      <div><span>Product savings</span><strong className="saving">−{formatPrice(discount)}</strong></div>
      <div><span>Delivery</span><strong>{delivery ? formatPrice(delivery) : 'FREE'}</strong></div>
      <hr />
      <div className="total"><span>Total</span><strong>{formatPrice(total)}</strong></div>
      <button className="checkout-btn" disabled={!items.length}>Proceed to Checkout</button>
      <small>Secure checkout · Free delivery over £50</small>
    </aside>
  )
}

export default CartSummary
