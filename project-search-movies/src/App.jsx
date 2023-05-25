import './App.css'

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

// const URL = "https://www.omdbapi.com/?apikey=e843b93a&s=lapara"
// const API_KEY="e843b93a"
function App() {
  const { search, setSearch, error} = useSearch()
  const { movies: MappedMovies, getMovies } = useMovies({ search })

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies()
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }



  return (
    <>
      <header>
        <h1>Buscador de Películas</h1>
        <form action="" onSubmit={handleSubmit}>
          <input name='movies' type="text"  placeholder="Marvel, Fast and Furious..." value={search} onChange={handleChange}/>
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
