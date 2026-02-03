export const fetchColorName = async (hex: string): Promise<string> => {
  const response = await fetch(
    `https://www.thecolorapi.com/id?hex=${hex.replace('#', '')}`
  )

  if (!response.ok) {
    throw new Error('Failed to fetch color name')
  }

  const data = await response.json()
  if (!data?.name?.value) { throw new Error('Not found') }
  return data.name.value
}