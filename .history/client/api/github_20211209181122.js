export default function apiGithub() {
  const response = await fetch(`http://5707-82-124-194-242.ngrok.io/api/users/${username}`);
  if (response) {

  }
  return await response.json()
}