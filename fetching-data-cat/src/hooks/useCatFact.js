import { useEffect, useState } from 'react'
import { getFact } from '../services/fact'

export function useCatFact () {
  const [fact, setFact] = useState('lorem ipsum cat facts here')

  const refreshFact = () => {
    getFact().then(newFact => setFact(newFact))
  }

  // useEffect for getFact
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
