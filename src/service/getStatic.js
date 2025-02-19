export default async function get(start, end) {
  const url =
    `${process.env.PUBLIC_URL}` + '/api/statistics/' + start + '/' + end
  function getCookie(name) {
    var nameEQ = name + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') c = c.substring(1, c.length)
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
    }
    return null
  }
  const uid = getCookie('uid')
  const token = getCookie('token')

  try {
    const response = await fetch(url, {
      method: 'GET',

      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.ok) {
      return await response
        .clone()
        .json()
        .catch(() => response.text())
    }
    if (response.status <= 501) {
      return response.status
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.headers)
      return error.response.status
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }
    console.log(error.config)
  }
}
