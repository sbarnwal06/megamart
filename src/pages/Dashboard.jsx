import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ProductList from '../components/products/ProductList'

const departments = [
  ['Groceries','🥦','Fresh food & pantry'], ['Electronics','📱','Mobiles & gadgets'],
  ['Fashion','👕','Style for everyone'], ['Home & Kitchen','🏠','Make home better'],
  ['Beauty','💄','Care & wellness'], ['Sports','⚽','Move & play'],
]

function Dashboard() {
  const { user } = useSelector(state => state.auth)
  return (
    <>
      <Header />
      <main className="page">
        <div className="container">
          <section className="hero">
            <div>
              <span className="eyebrow">KRISHMART HYPERMARKET</span>
              <h1>Big choice.<br /><em>Better everyday value.</em></h1>
              <p>Discover thousands of products across every department, from your weekly groceries to the latest tech.</p>
              <Link className="hero-btn" to="/products">Shop all products →</Link>
            </div>
            <div className="hero-art">
              <div className="hero-circle">🛒</div>
              <span className="float-card one">⚡ Daily Deals</span>
              <span className="float-card two">🚚 Fast Delivery</span>
            </div>
          </section>

          <section className="welcome-row">
            <div><h2>Good morning, {user?.name?.split(' ')[0]} 👋</h2><p>Ready to find something great today?</p></div>
            <Link to="/cart" className="outline-btn">View cart</Link>
          </section>

          <section>
            <div className="section-title"><div><h2>Shop by department</h2><p>Everything under one roof.</p></div></div>
            <div className="department-grid">
              {departments.map(([name, icon, desc]) => (
                <Link to="/products" key={name} className="department-card">
                  <span>{icon}</span><div><strong>{name}</strong><small>{desc}</small></div><b>→</b>
                </Link>
              ))}
            </div>
          </section>

          <section className="products-section">
            <div className="section-title"><div><h2>Popular right now</h2><p>Customer favourites from across KrishMart.</p></div><Link to="/products" className="text-link">View all →</Link></div>
            <ProductList limit={8} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Dashboard
