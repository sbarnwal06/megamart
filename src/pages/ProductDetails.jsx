import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Button from '../components/common/Button'
import { addToCart } from '../redux/slices/cartSlice'
import { toggleWishlist } from '../redux/slices/wishlistSlice'
import { getDiscountedPrice, formatPrice } from '../utils/helpers'
import { toast } from 'react-hot-toast'

function ProductDetails() {
  const { id } = useParams()
  const product = useSelector(state => state.products.items.find(p => p.id === Number(id)))
  const liked = useSelector(state => state.wishlist.items.some(item => item.id === product?.id))
  const dispatch = useDispatch()

  if (!product) return <><Header /><main className="page"><div className="container empty"><h2>Product not found</h2><Link className="hero-btn" to="/products">Back to shop</Link></div></main><Footer /></>

  const salePrice = getDiscountedPrice(product.price, product.discount)

  return (
    <>
      <Header />
      <main className="page">
        <div className="container">
          <div className="breadcrumb">Home / {product.category} / {product.name}</div>
          <div className="details">
            <div className="details-image"><img src={product.image} alt={product.name} /></div>
            <div className="details-copy">
              <span className="product-category">{product.category}</span>
              <h1>{product.name}</h1>
              <div className="rating large">★ {product.rating} <span>{product.reviews} reviews</span></div>
              <p className="details-description">{product.description}</p>
              <div className="details-price"><strong>{formatPrice(salePrice)}</strong>{product.discount > 0 && <><del>{formatPrice(product.price)}</del><span>-{product.discount}%</span></>}</div>
              <p className="stock">✓ In stock · {product.stock} available</p>
              <div className="details-actions">
                <Button onClick={() => { dispatch(addToCart(product)); toast.success('Added to cart') }}>Add to Cart</Button>
                <button className={`wishlist-large ${liked ? 'liked' : ''}`} onClick={() => dispatch(toggleWishlist(product))}>{liked ? '♥ Saved' : '♡ Wishlist'}</button>
              </div>
              <div className="delivery-box"><span>🚚</span><div><strong>Fast delivery</strong><small>Free delivery on orders over £50.</small></div></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ProductDetails
