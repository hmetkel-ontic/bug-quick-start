import { fetchUser } from "./gitHubApi";

(async () => {
  const userData = await fetchUser("harshmetkel24");
  document.querySelector("h1").innerHTML = JSON.stringify(userData);
})();
