const API_KEY = 'e843b93a'

export async function searchMovies({ search}) {
  if (search === '') return null
  try {

  const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
  const data = await response.json()
  
  const {Search: movies } = data

  const MappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { MappedMovies }
  
  } catch (error) {
    throw new Error('No se encontraron resultados')
  }

  
}