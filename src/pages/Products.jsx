import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ProductFilter from '../components/products/ProductFilter'
import ProductList from '../components/products/ProductList'
import { useSelector } from 'react-redux'

function Products() {
  const { items, search, category } = useSelector(state => state.products)
  const visible = items.filter(p =>
    (category === 'All' || p.category === category) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <>
      <Header />
      <main className="page">
        <div className="container">
          <div className="breadcrumb">Home / Shop / {category}</div>
          <div className="section-title"><div><h2>{category === 'All' ? 'All products' : category}</h2><p>{visible.length} products available</p></div></div>
          <ProductFilter />
          <ProductList />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Products
