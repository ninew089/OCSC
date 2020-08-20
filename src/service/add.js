export default async function add(something) {
  const url = `${process.env.PUBLIC_URL}`+'/api/answersheets/1'

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/problem+json; charset=utf-8',
      },
      body: JSON.stringify(something),
    })

    if (response.ok) {
      return await response.json()

      // return await response.json();
    }
    if (response.status <= 501) {
      console.log(response.status)
      return response.status

      // eslint-disable-next-line prefer-promise-reject-errors
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      return error.response.status
    } else if (error.request) {
      return error.request
    } else {
      // Something happened in setting up the request and triggered an Error
      return 999
    }
  }
}
