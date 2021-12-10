const BASE_URL = "http://6a95-82-124-194-242.ngrok.io"

async function apiGithubGetUser(username) {
  const response = await fetch(`${BASE_URL}/api/users/search?login=${username}`);
  return await response.json();
}

async function apiGithubGetUserRepos(username) {
  const response = await fetch(`${BASE_URL}/api/users/repos?login=${username}`);
  return await response.json();
}

export { apiGithubGetUser, apiGithubGetUserRepos }