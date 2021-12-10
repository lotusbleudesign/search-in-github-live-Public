
export default async function apiGithub(username) {

  const response = await fetch(`http://8a4e-82-124-194-242.ngrok.io/api/users/search?login=${username}`);

  let data = null
  try {
    data = await response.json();
  } catch (e) {
    data.status(500).json({
      error: "Something wrong ...",
      message: e.message
    })
  }
  return data
}