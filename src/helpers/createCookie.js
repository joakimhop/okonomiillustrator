const createCookie = (value) => {
  const name = {};
  name.okonomiIllustrator = value;
  const cookie = `name=${JSON.stringify(name)}`;
  document.cookie = cookie;
};

export default createCookie;
