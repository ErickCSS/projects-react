
export async function getRandomImage (word) {
  const response = await fetch(`https://cataas.com/cat/says/${word}?&json=true`)
  const dataImage = await response.json()
  const { url } = dataImage
  return url
}
