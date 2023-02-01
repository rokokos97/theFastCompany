const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expiresIn";
const USERID_KEY = "jwt-userId";

export function setTokens({ idToken, refreshToken, expiresIn = 3600, localId }) {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(USERID_KEY, localId);
    localStorage.setItem(TOKEN_KEY, idToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
}
export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
}
export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
}
export function getTokenExpiresData() {
    return localStorage.getItem(EXPIRES_KEY);
}

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresData
};

export default localStorageService;
