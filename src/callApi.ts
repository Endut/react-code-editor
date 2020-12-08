export const callApi = async (url: string, body: any, method = 'GET') => {
  try {
    const res = await fetch(url, {
      method,
      body: JSON.stringify(body)
    });

    return await res.json()
  } catch(e) {
    console.error(e)
  }
} 