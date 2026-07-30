import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, increment, decrement  } from '../../redux/slices/cartSlice'
import { toggleWishlist } from '../../redux/slices/wishlistSlice'
import { formatPrice, getDiscountedPrice } from '../../utils/helpers'
import { toast } from 'react-hot-toast'
import Button from '../common/Button'

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const liked = useSelector(state => state.wishlist.items.some(item => item.id === product.id))
  const salePrice = getDiscountedPrice(product.price, product.discount)
  const cartItem = useSelector(state => state.cart.items.find(item => item.id === product?.id))
  const quantity = cartItem ? cartItem?.quantity : 0

  const handleCart = () => {
    dispatch(addToCart(product))
    toast.success(`${product.name} added to cart`)
  }

  const handleDecrement = () => {
      dispatch(decrement(product.id))
      if (quantity === 1) {
        toast.error('Removed from cart')
      }
    }
  
    const handleIncrement = () => {
      dispatch(increment(product.id))
    }

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {product.discount > 0 && <span className="discount-badge">-{product.discount}%</span>}
        <button
          className={`heart-btn ${liked ? 'liked' : ''}`}
          onClick={() => dispatch(toggleWishlist(product))}
          aria-label="Wishlist"
        >
          {liked ? '♥' : '♡'}
        </button>
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} loading="lazy" />
        </Link>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <Link to={`/product/${product.id}`}><h3>{product.name}</h3></Link>
        <div className="rating">★ {product.rating} <span>({product.reviews})</span></div>
        <div className="price-row">
          <strong>{formatPrice(salePrice)}</strong>
          {product.discount > 0 && <del>{formatPrice(product.price)}</del>}
        </div>
        {quantity ? 
        (
          <div className="quantity-controls">
          <Button onClick={handleDecrement}>-</Button>
          <span className="quantity-count">{quantity}</span>
          <Button onClick={handleIncrement}>+</Button>
        </div>
        )
         : <button className="add-cart" onClick={handleCart}>Add to Cart</button>
        }
        
      </div>
    </article>
  )
}

export default ProductCard
