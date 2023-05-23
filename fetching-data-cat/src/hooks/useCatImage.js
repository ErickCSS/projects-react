import { useEffect, useState } from 'react'
import { getRandomImage } from '../services/ramdonImage'

const CAT_ENDPOINT_IMAGE = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState('')

  // useEffect for get Random Image
  useEffect(() => {
    const word = fact.split(' ', 3).join(' ')
    getRandomImage(word).then(newImageUrl => setImageUrl(newImageUrl))
  }, [fact])

  return { imageUrl: `${CAT_ENDPOINT_IMAGE}${imageUrl}` }
}
