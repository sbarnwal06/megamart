import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../../redux/slices/productSlice'

function SearchBar() {
  const dispatch = useDispatch()
  const search = useSelector(state => state.products.search)

  return (
    <div className="search-box">
      <span>⌕</span>
      <input
        value={search}
        onChange={e => dispatch(setSearch(e.target.value))}
        placeholder="Search by product name or brand..."
      />
      {search && <button onClick={() => dispatch(setSearch(''))}>×</button>}
    </div>
  )
}

export default SearchBar
