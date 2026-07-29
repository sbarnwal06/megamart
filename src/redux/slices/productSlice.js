import { createSlice } from '@reduxjs/toolkit'
import products from '../../data/products.json'

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: products,
    search: '',
    category: 'All',
    sort: 'featured',
  },
  reducers: {
    setSearch: (state, action) => { state.search = action.payload },
    setCategory: (state, action) => { state.category = action.payload },
    setSort: (state, action) => { state.sort = action.payload },
    clearFilters: (state) => {
      state.search = ''
      state.category = 'All'
      state.sort = 'featured'
    },
  },
})

export const { setSearch, setCategory, setSort, clearFilters } = productSlice.actions
export default productSlice.reducer
