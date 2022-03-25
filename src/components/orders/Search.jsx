import './Orders.css'

const Search = () => {
  return (
    <div className='search-wrapper'>
      <div className='input'>
        <input type='text' placeholder='ID' />
      </div>
      <div className='input'>
        <input type='text' placeholder='Name' />
      </div>
      <div className='input'>
        <select>
          <option value='' disabled>
            City
          </option>
          <option value=''>New York</option>
          <option value=''>Manhattan</option>
          <option value=''>New Jersey</option>
          <option value=''>Brooklyn</option>
        </select>
      </div>
      <div className='input'>
        <select>
          <option value='' disabled>
            Bus
          </option>
          <option value=''>Volvo</option>
          <option value=''>Daewoo</option>
          <option value=''>Nissan</option>
        </select>
      </div>
      <div className='button'>Search</div>
    </div>
  )
}

export default Search
