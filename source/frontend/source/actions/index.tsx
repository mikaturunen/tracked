
const SHOW_LOGIN_WINDOW = 'SHOW_LOGIN_WINDOW';
const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';

export default {
    SHOW_LOGIN_WINDOW,
    ATTEMPT_LOGIN
};

export const showLogin = () => ({ type: SHOW_LOGIN_WINDOW });
export const attemptLogin = (username: string, password: string) => ({ type: ATTEMPT_LOGIN, payload: { username, password } });
