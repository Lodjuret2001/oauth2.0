function findTokenInCookie(cookieName) {
  if (document.cookie === "") return;

  const cookiesArray = document.cookie
    .split(";")
    .map((cookie) => cookie.trim());

  const cookie = cookiesArray.filter((c) => {
    return c.includes(cookieName);
  });
  if (cookie.length === 0) return;

  const cookie_token_array = cookie[0].split("=");

  if (cookie_token_array[0] === cookieName) {
    return cookie_token_array[1];
  } else return;
}

export default findTokenInCookie;
