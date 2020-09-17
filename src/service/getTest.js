export default async function get() {
  const url = `${process.env.PUBLIC_URL}` + '/api/tests/1'
  try {
    const response = await fetch(url)
    if (response.ok) {
      return await response
        .clone()
        .json()
        .catch(() => response.text())
      // return await response.json();
    }
    if (response.status <= 501) {
 
      return response.status
    }
    // return await response.json();
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
