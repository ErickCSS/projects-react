/* eslint-disable react/prop-types */


function viewMovies({ movies }) {

  return (
    <div>
      {
        movies.map(movie => (
            <article key={movie.id}>
              <img src={movie.poster} alt={movie.tittle}/>
              <h3>{movie.title} - {movie.year}</h3>
            </article>
          ))
        }
    </div>
  )
}

function noMoviesResults() {
  return(
    <div>
      <h3>No se encontraron resultados</h3>
    </div>
  )
}


export function Movies({ movies }) {

  const hasMovies = movies?.length > 0

  return(
    <div>
      {
        hasMovies ? viewMovies({movies}) : noMoviesResults()
      }
    </div>
  )
}