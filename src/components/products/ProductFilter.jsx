import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSort, clearFilters } from '../../redux/slices/productSlice'
import { categories } from '../../utils/constants'
import SearchBar from './SearchBar'

function ProductFilter() {
  const dispatch = useDispatch()
  const { category, sort } = useSelector(state => state.products)

  return (
    <div className="filter-panel">
      <SearchBar />
      <div className="filter-row">
        <div className="category-chips">
          {categories.map(item => (
            <button
              key={item}
              className={category === item ? 'active' : ''}
              onClick={() => dispatch(setCategory(item))}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="sort-wrap">
          <label>Sort</label>
          <select value={sort} onChange={e => dispatch(setSort(e.target.value))}>
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to high</option>
            <option value="price-high">Price: High to low</option>
            <option value="rating">Top rated</option>
            <option value="discount">Best discount</option>
          </select>
          <button className="clear-filter" onClick={() => dispatch(clearFilters())}>Clear</button>
        </div>
      </div>
    </div>
  )
}

export default ProductFilter
