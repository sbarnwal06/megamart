import { useDispatch } from 'react-redux'
import { increment, decrement, removeFromCart } from '../../redux/slices/cartSlice'
import { formatPrice, getDiscountedPrice } from '../../utils/helpers'
import { toast } from 'react-hot-toast'

function CartItem({ item }) {
  const dispatch = useDispatch()
  const price = getDiscountedPrice(item.price, item.discount)

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-main">
        <span className="product-category">{item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.brand} · ★ {item.rating}</p>
        <strong>{formatPrice(price)}</strong>
      </div>
      <div className="qty-control">
        <button onClick={() => dispatch(decrement(item.id))}>−</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increment(item.id))}>+</button>
      </div>
      <div className="cart-line-total">{formatPrice(price * item.quantity)}</div>
      <button
        className="remove-btn"
        onClick={() => {
          dispatch(removeFromCart(item.id))
          toast.success('Removed from cart')
        }}
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem
