import jwt_decode from "jwt-decode";

function setAuthToken(token: string) {
  localStorage.setItem("token", token);
}

function getAuthData(): unknown {
  const tokentest = localStorage.getItem("token");
  var decoded = jwt_decode(tokentest!);

  return decoded;
}

export { setAuthToken, getAuthData };
