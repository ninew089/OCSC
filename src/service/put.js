export default async function add(something) {
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
  const url = `${process.env.PUBLIC_URL}` + '/api/admins/' + uid
  const token = getCookie('token')
  try {
    console.log('json post:', JSON.stringify(something))
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/problem+json; charset=utf-8',
        // eslint-disable-next-line
        Authorization: 'Bearer' + ' ' + token,
      },
      body: JSON.stringify(something),
    })

    if (response.ok) {
      return await response.json()
    }
    if (response.status <= 501) {
      console.log(response.status)
      return response.status
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      return error.response.status
    } else if (error.request) {
      return error.request
    } else {
      return 999
    }
  }
}
