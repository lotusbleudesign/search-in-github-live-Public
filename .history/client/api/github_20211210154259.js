
export default async function apiGithub(username) {

  //const response = await fetch(`http://9b0c-82-124-194-242.ngrok.io/api/users/login=${username}`);
  const response = await fetch(`http://9b0c-82-124-194-242.ngrok.io/api/users/login=${username}`);
  const data = await response.json()
}
return data
}