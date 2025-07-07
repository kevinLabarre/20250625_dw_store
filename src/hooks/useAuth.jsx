export const useAuth = () => {
  // REMPLACER PAR UNE LOGIQUE AVEC UN SERVEUR BACK
  const fakeLogin = (credential) => {
    if (credential.login === "admin" && credential.password === "admin") {
      return { token: "TOKEN_BACK" };
    } else false;
  };

  const login = (credential) => {
    const response = fakeLogin(credential);

    if (response) {
      sessionStorage.setItem("token", response.token);
      return true;
    } else throw new Error("Bad credentials");
  };

  return { login };
};
