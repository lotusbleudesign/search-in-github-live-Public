
export default
  async function apiGithubGetUser(username) {
  const response = await fetch(`http://e908-82-124-194-242.ngrok.io/api/users/search?login=${username}`);
  return await response.json();
}

async function apiGithubGetUserRepos(username) {
  const response = await fetch(`http://e908-82-124-194-242.ngrok.io/api/users/repos?login=${username}`);
  return await response.json();
}

export { apiGithubGetUser, apiGithubGetUserRepos }