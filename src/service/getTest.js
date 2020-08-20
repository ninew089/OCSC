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
      //alert(
      //   "เกิดปัญหา" +
      //    response.status +
      //    "\n คลิก close  เพื่อเริ่มทำแบบทดสอบใหม่อีกครั้ง"
      //);
      // window.location.href = `${process.env.PUBLIC_URL}`;
      // console.log(response.status);
      // eslint-disable-next-line prefer-promise-reject-errors
      return response.status
    }
    // return await response.json();
  } catch (error) {
    if (error.response) {
      /*
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      //console.log(error.response.data);
      // console.log(error.response.status);
      //alert(
      //   "เกิดปัญหา" +
      //    error.response.status +
      //"\n คลิก close เพื่อเริ่มทำแบบทดสอบใหม่อีกครั้ง" +
      //  "\nhttps://cubioinfo.com/aptitude-test/api/tests/1"
      //  );
      //  window.location.href = `${process.env.PUBLIC_URL}`;
      console.log(error.response.headers)
      return error.response.status
    } else if (error.request) {
      /*
       * The request was made but no response was received, `error.request`
       * is an instance of XMLHttpRequest in the browser and an instance
       * of http.ClientRequest in Node.js
       */
      console.log(error.request)
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log('Error', error.message)
    }
    console.log(error.config)
  }
}
