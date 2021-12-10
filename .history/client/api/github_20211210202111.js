
export default async function apiGithub(username) {

  const response = await fetch(`http://e908-82-124-194-242.ngrok.io/api/users/search?login=${username}`);
  return await response.json();

}