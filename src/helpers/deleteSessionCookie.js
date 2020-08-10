const deleteSessionCookie = (value) => {
  const name = {};
  name.okonomiIllustrator = value;
  const cookie = `name=${JSON.stringify(name)};username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  document.cookie = cookie;
};

export default deleteSessionCookie;
