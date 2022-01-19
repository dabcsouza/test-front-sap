const fetchUsersAPI = async (since) => {
  const sinceValid = since >= 0 ? since : 0;
  const fetch_URL = `https://api.github.com/users?since=${sinceValid}&per_page=100`;
  try {
    const response = await fetch(fetch_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Algo deu errado: ${error}`);
  }
}

export default fetchUsersAPI;