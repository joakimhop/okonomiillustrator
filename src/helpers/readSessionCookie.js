const readSessionCookie = () => {
  let result = document.cookie.match(new RegExp('^name={"okonomiIllustrator"*'));
  if (!result) return null;
  result && result.input && (result = JSON.parse(result.input.substr(5)));
  return result.okonomiIllustrator;
};

export default readSessionCookie;
