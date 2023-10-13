type AccessToken = string;

const ACCESS_TOKEN: AccessToken = 'access_token';

export const userStorage = {
    set(accessToken: string) {
        try {
            window.localStorage.setItem(ACCESS_TOKEN, JSON.stringify(accessToken));
        } catch (err) {
            console.error(err);
        }
    },

    get() {
        try {
            const token = window.localStorage.getItem(ACCESS_TOKEN);
            return token ? JSON.parse(token) : undefined;
        } catch (err) {
            console.error(err);
        }
    },

    remove() {
        try {
            window.localStorage.removeItem(ACCESS_TOKEN);
        } catch (err) {
            console.error(err);
        }
    },
};
