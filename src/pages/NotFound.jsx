import { Link } from 'react-router-dom'

function NotFound() {
  return <main className="not-found"><div><div className="not-found-number">404</div><h1>Page not found</h1><p>The page you're looking for doesn't exist.</p><Link className="hero-btn" to="/dashboard">Back to MegaMart</Link></div></main>
}

export default NotFound
