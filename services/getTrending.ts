import { url, errorMsg } from '../constants'

export async function getTrending() {
  try {
    const response = await fetch(
      `${url}/trending/all/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
    const data = await response.json()

    return data
  } catch (e) {
    return errorMsg
  }
}
