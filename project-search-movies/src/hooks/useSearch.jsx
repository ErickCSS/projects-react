import { useEffect, useState, useRef } from 'react'


export function useSearch() {

  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstRender = useRef(true)

  useEffect(() => {

    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }
    if (search === '') {
      setError('No se encontraron resultados')
      return
    }

    if (search.match(/\d+/g)) {
      setError('No se puede ingresar números')
      return
    }
    if (search.length < 3) {
      setError('Ingrese al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error}
  
}