
export default async function apiGithub(username) {

  const response = await fetch(`http://5707-82-124-194-242.ngrok.io/api/users/${username}`);

  try {
    const data = await response.json();
  } catch (e) {
    data.status(500).json({
      error: "Something wrong ...",
      message: e.message
    })
  }
  return data
}