import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handlerImage = () => {
    refreshFact()
  }

  return (
    <>
      <h1>App de Gatos</h1>
      <button onClick={handlerImage}>New Fact Image</button>
      <div>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt='Image extracted using random words' />}
      </div>
    </>
  )
}
