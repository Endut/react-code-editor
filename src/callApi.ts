const API_URL = process.env.API_URL;


export const callApi = async (query: string, body: any, method = 'GET') => {
  const url = `${API_URL}/${query}`;
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