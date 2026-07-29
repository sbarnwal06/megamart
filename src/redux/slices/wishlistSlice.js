import { createSlice } from '@reduxjs/toolkit'

const savedWishlist = JSON.parse(localStorage.getItem('megamart_wishlist') || '[]')

const persist = (items) => localStorage.setItem('megamart_wishlist', JSON.stringify(items))

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: { items: savedWishlist },
  reducers: {
    toggleWishlist: (state, action) => {
      const product = action.payload
      const exists = state.items.some(item => item.id === product.id)
      state.items = exists
        ? state.items.filter(item => item.id !== product.id)
        : [...state.items, product]
      persist(state.items)
    },
  },
})

export const { toggleWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
