export const Constant = {
  baseURL: "http://localhost:8080/",
};
export const Regex = {
  emailRegex: /^[a-zA-Z]+[a-zA-Z0-9]+[@][a-z]+[\.][a-z]{2,}$/,
  passwordRegex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  urlRegex: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
  nameRegex: /^[A-Za-z][A-Za-z 0-9\.\,\(\)\']{1,}$/


};
export const ApiEndpoints = {
  LOGIN: "login",
  LOGOUT: "logout",
  REGISTER: "register",
};