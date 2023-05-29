import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const previousMovies = useRef(search)

  const getMovies = useCallback(async ({search}) => {
      if (previousMovies.current === search) return
  
  
      previousMovies.current = search
      const { MappedMovies } = await searchMovies({ search })
      setMovies(MappedMovies)
    }
  ,[])
  
  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [movies, sort])

  return { movies: sortedMovies, getMovies}
}