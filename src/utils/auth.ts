import jwt_decode from "jwt-decode";
import { Payload } from "../types/user";

function setAuthToken(token: string) {
  localStorage.setItem("token", token);
}

function getAuthData(): Payload {
  const tokentest = localStorage.getItem("token");
  const decoded: Payload = jwt_decode(tokentest!);

  return decoded;
}

export { setAuthToken, getAuthData };
