import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { loginSuccess } from '../redux/slices/authSlice'
import { authenticateUser } from '../services/authService'
import { useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'

function Login() {
  const { isAuthenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState({ email: 'demo@krishmart.com', password: '123456' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (isAuthenticated) return <Navigate to="/dashboard" replace />

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const user = await authenticateUser(form.email, form.password)
      dispatch(loginSuccess(user))
      toast.success(`Welcome back, ${user.name.split(' ')[0]}!`)
      navigate(location.state?.from?.pathname || '/dashboard', { replace: true })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="login-page">
      <div className="login-visual">
        <div className="login-logo"><span>M</span> KrishMart</div>
        <div className="login-copy">
          <span className="eyebrow">YOUR EVERYDAY HYPERMARKET</span>
          <h1>Everything you need.<br /><em>All in one cart.</em></h1>
          <p>Shop across groceries, electronics, fashion, home, beauty and thousands of everyday essentials.</p>
          <div className="login-benefits"><span>✓ 1000+ products</span><span>✓ Easy returns</span><span>✓ Secure shopping</span></div>
        </div>
      </div>

      <div className="login-panel">
        <form className="login-card" onSubmit={submit}>
          <span className="eyebrow">WELCOME BACK</span>
          <h2>Sign in to KrishMart</h2>
          <p className="muted">Access your orders, cart and personalised shopping.</p>
          <label>Email address<input type="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} required /></label>
          <label>Password<input type="password" value={form.password} onChange={e => setForm({...form, password:e.target.value})} required /></label>
          {error && <div className="form-error">{error}</div>}
          <button className="login-btn" disabled={loading}>{loading ? 'Signing in...' : 'Sign in →'}</button>
          <div className="demo-box"><strong>Demo account</strong><br />demo@krishmart.com · 123456</div>
        </form>
      </div>
    </main>
  )
}

export default Login
