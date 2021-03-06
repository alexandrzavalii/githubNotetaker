export const api = {
  getBio(username){
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}`;
    return fetch(url).then(res => res.json());
  },
  getRepos(username){
    username = username.toLowerCase().trim();
    const url = `https://api.github.com/users/${username}/repos`;
    return fetch(url).then(res => res.json());
  }
};
