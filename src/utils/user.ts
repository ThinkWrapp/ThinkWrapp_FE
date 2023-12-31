import { redirect } from 'react-router-dom';
import { userStorage } from './userStorage';

export const checkAuthLoader = () => {
    const userToken = userStorage.get();

    if (!userToken) return redirect('/');

    return null;
};

export const checkAuth = (): boolean | undefined => !!userStorage.get();

export const redirectHome = () => redirect('/');
