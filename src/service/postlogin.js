export default async function post(something, uid) {
  const url = `${process.env.PUBLIC_URL}` + '/api/tokens/' + uid
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
      method: 'POST',
      headers: {
        'Content-Type': 'application/problem+json; charset=utf-8',
        Authorization: 'Bearer' + ' ' + token,
      },

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
