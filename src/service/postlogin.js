export default async function post(something, uid) {
  const url = `${process.env.PUBLIC_URL}` + '/api/tokens/' + uid
  try {
    const response = await fetch(url, {
      method: 'POST',

      body: JSON.stringify(something),
    })

    if (response.ok) {
      return await response.json()
    }
    if (response.status <= 501) {
      return response.status
    }
  } catch (error) {
    if (error.response) {
      return error.response.status
    } else if (error.request) {
      return error.request
    } else {
      return 999
    }
  }
}
