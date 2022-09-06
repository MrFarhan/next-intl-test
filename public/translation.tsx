export function translationJson(local: string) {
  let json = {};
  switch (local) {
    case "en":
      json = {
        Login: { login: "EN" },
      };
      break;

    case "es":
      json = {
        Login: { login: "ES" },
      };

      break;

    default:
    case "es":
      json = {
        Login: { login: "login translated in default" },
      };
      break;
  }

  return json;
}
