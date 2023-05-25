import resultsMovies from '../mockup/resultsApi.json'
import noResults from '../mockup/noResults.json'
import { useState } from 'react'

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const { Search: movies} = responseMovies

  console.log(responseMovies)
  // Mapeo de los datos de la API
  const MappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      setResponseMovies(resultsMovies)
    } else {
      setResponseMovies(noResults)
    }
  }

  return { movies: MappedMovies, getMovies}
}