export default async function get() {
  const url = "https://cubioinfo.com/aptitude-test/api/testitems/1";
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response
        .clone()
        .json()
        .catch(() => response.text());
    }
    if (response.status <= 501) {
      return response.status;
    }
  } catch (error) {
    if (error.response) {
      return error.response.status;
    } else if (error.request) {
      console.log(error.request);
      return error.request;
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
}
