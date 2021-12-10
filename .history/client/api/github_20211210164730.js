
export default async function apiGithub(username) {

  const response = await fetch(`http://8a4e-82-124-194-242.ngrok.io/api/users/search?login=${username}`);
  let data = null

  return data = await response.json();


}