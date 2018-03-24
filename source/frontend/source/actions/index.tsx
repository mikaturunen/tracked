
const SHOW_LOGIN_WINDOW = 'SHOW_LOGIN_WINDOW';
const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';

export default {
    SHOW_LOGIN_WINDOW,
    ATTEMPT_LOGIN
};

const creator = (actionName: string, payload?: any) => {
    return {
        [actionName]: actionName,
        payload
    }
}

export const showLogin = () => creator(SHOW_LOGIN_WINDOW);
