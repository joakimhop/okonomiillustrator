const readCookie = () => {
  let result = document.cookie.match(new RegExp('^name={"okonomiIllustrator"*'));
  result && result.input && (result = JSON.parse(result.input.substr(5)));
  return result.okonomiIllustrator;
};

export default readCookie;
