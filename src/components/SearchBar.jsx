import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'
export default function SearchBar() {
const [search, setSearch] = useState('')
const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${search}`)
}
  return (
    <div className='searchbar'>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <label htmlFor="search">Search:</label>
            <input type="text" onChange={(e)=> setSearch(e.target.value)} id="search" required />
        </form>
    </div>
  )
}
