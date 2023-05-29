import { useCallback, useState } from 'react'
import './App.css'

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

// const URL = "https://www.omdbapi.com/?apikey=e843b93a&s=lapara"
// const API_KEY="e843b93a"
function App() {
  const { search, setSearch, error} = useSearch()
  const [sort, setSort] = useState(false)
  const { movies: MappedMovies, getMovies } = useMovies({ search, sort })

  const debounceGetMovies = useCallback( debounce( search => {
    getMovies({search})
  }, 500), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debounceGetMovies({search: newSearch})
  }



  return (
    <>
      <header>
        <h1>Buscador de Películas</h1>
        <form action="" onSubmit={handleSubmit}>
          <input name='movies' type="text"  placeholder="Marvel, Fast and Furious..." value={search} onChange={handleChange}/>
          <input type="checkbox" name="checkbox" onChange={handleSort} checked={sort}/>
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{color: "red"}}>{error}</p>}
      </header>
      <main>
        <Movies movies={MappedMovies} />
      </main>
    </>
  )
}

export default App
