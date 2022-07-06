import httpService from "./httpService";
import jwtDecode from "jwt-decode";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";
httpService.setJWT(getjWT());
export async function login(email, password) {
  const { data: jwt } = await httpService.post(apiEndpoint, {
    email,
    password,
  });
  localStorage.setItem(tokenKey, jwt);
}
export function logout() {
  localStorage.removeItem(tokenKey);
}
export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}
export function loginwithJwt(jwt) {
  localStorage.removeItem(tokenKey);
}
export function getjWT() {
  return localStorage.getItem("token");
}
