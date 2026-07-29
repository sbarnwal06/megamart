import { createSlice } from '@reduxjs/toolkit'

const savedCart = JSON.parse(localStorage.getItem('krishmart_cart') || '[]')

const persist = (items) => localStorage.setItem('krishmart_cart', JSON.stringify(items))

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: savedCart },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existing = state.items.find(item => item.id === product.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...product, quantity: 1 })
      }
      persist(state.items)
    },
    increment: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) item.quantity += 1
      persist(state.items)
    },
    decrement: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        item.quantity -= 1
        if (item.quantity <= 0) state.items = state.items.filter(i => i.id !== action.payload)
      }
      persist(state.items)
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      persist(state.items)
    },
    clearCart: (state) => {
      state.items = []
      persist(state.items)
    },
  },
})

export const { addToCart, increment, decrement, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
