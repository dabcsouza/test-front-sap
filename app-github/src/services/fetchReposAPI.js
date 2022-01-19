const fetchReposAPI = async (user) => {

  const fetch_URL = `https://api.github.com/users/${user}/repos`;
  try {
    const response = await fetch(fetch_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Algo deu errado: ${error}`);
  }

}

export default fetchReposAPI;