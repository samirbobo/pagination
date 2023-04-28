const URL = "https://api.github.com/users/john-smilga/followers?per_page=100";

const fetchFollowers = async () => {
  const respons = await fetch(URL);
  const data = await respons.json();
  return data;
}

export default fetchFollowers;