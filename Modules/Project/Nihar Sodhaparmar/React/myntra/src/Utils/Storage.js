// return the user data from the local storage
export const getUserId = () => {
  const userId = localStorage.getItem("userId");
  if (userId) return JSON.parse(userId);
  else return null;
};

// return the token from the local storage
export const getToken = () => {
  return localStorage.getItem("token") || null;
};

// return isAdmin from the localstorage
export const isAdmin = () => {
  const isAdmin = localStorage.getItem("isAdmin");
  if (isAdmin) return JSON.parse(isAdmin);
  else return false;
};

// remove the token and user from the local storage
export const removeUserSession = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("isAdmin");
};

// set the token and user from the local storage
export const setUserSession = (token, userId, isAdmin) => {
  localStorage.setItem("token", token);
  localStorage.setItem("userId", JSON.stringify(userId));
  localStorage.setItem("isAdmin", isAdmin);
};
