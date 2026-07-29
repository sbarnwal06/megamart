import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { getDiscountedPrice } from '../../utils/helpers'

function ProductList({ limit }) {
  const { items, search, category, sort } = useSelector(state => state.products)

  const filtered = useMemo(() => {
    let result = items.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'All' || product.category === category
      return matchesSearch && matchesCategory
    })

    result = [...result].sort((a, b) => {
      if (sort === 'price-low') return getDiscountedPrice(a.price, a.discount) - getDiscountedPrice(b.price, b.discount)
      if (sort === 'price-high') return getDiscountedPrice(b.price, b.discount) - getDiscountedPrice(a.price, a.discount)
      if (sort === 'rating') return b.rating - a.rating
      if (sort === 'discount') return b.discount - a.discount
      return b.featured - a.featured
    })

    return limit ? result.slice(0, limit) : result
  }, [items, search, category, sort, limit])

  if (!filtered.length) {
    return <div className="empty"><h3>No products found</h3><p className="muted">Try another search or category.</p></div>
  }

  return <div className="product-grid">{filtered.map(product => <ProductCard key={product.id} product={product} />)}</div>
}

export default ProductList
