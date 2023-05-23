const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'

export async function getFact () {
  const response = await fetch(CAT_ENDPOINT_FACT)
  const data = await response.json()
  const { fact } = data
  return fact
}
