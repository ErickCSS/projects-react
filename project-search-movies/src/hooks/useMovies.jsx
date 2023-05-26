import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search }) {
  const [movies, setMovies] = useState([])
  const previousMovies = useRef(search)

  const getMovies = async () => {
    if (previousMovies.current === search) return


    previousMovies.current = search
    const { MappedMovies } = await searchMovies({ search })
    setMovies(MappedMovies)
  }

  return { movies, getMovies}
}