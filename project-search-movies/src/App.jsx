import './App.css'
import resultsMovies from './mockup/resultsApi.json'
import noResults from './mockup/noResults.json'

// const URL = "https://www.omdbapi.com/?apikey=e843b93a&s=lapara"
// const API_KEY="e843b93a"
function App() {
  const { Search: movies} = resultsMovies
  const hasMovies = movies.length > 0

  return (
    <>
      <header>
        <h1>Buscador de Películas</h1>
        <form action="">
          <input type="text"  placeholder="Marvel, Fast and Furious..."/>
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {
          hasMovies && movies.map(movie => (
            <article key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title}/>
              <h3>{movie.Title} - {movie.Year}</h3>
            </article>
          ))
        }
      </main>
    </>
  )
}

export default App
