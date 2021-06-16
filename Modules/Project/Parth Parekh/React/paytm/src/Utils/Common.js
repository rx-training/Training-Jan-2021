export const getUserId = () => {
    const userStr = sessionStorage.getItem("userId");
    if (userStr) {
        return JSON.parse(userStr);
    } else return null;
};
export const getToken = () => {
    return sessionStorage.getItem("token") || null;
};
export const setUserSession = (token, userId) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userId", JSON.stringify(userId));
};

export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
};
