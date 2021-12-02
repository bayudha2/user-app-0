import cookie from 'react-cookies';

export const AUTH_KEY = 'AUTH_KEY_auth';

export const getCookie = (cookieName) => {
    if (cookie.load(cookieName) !== undefined) {
        return cookie.load(cookieName);
    }
    return null;
};

export const setCookie = (cookieName, objCookies) => {
    cookie.save(cookieName, objCookies, { path: '/' });
    return cookie;
};

export const clearCookie = (cookieName) => {
    cookie.remove(cookieName, { path: '/' });
};

export const setSessionLogin = (resp) => {
    setCookie(AUTH_KEY, resp);
};

export const logout = () => {
    clearCookie(AUTH_KEY);
};

export default {
    setSessionLogin,
    getCookie,
    setCookie,
    clearCookie,
    logout,
};
