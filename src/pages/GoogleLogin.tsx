import { refreshToken } from '@/api/auth';
import { userStorage } from '@/utils/userStorage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function GoogleLogin() {
    const navigate = useNavigate();

    useEffect(() => {
        try {
            refreshToken().then((response) => {
                userStorage.set(response.access_token);
                toast.success('소셜로그인에 성공했습니다.');
            });
        } catch (error) {
            toast.error('소셜로그인에 실패했습니다.');
            console.error(error);
        } finally {
            navigate('/');
        }
    }, []);

    return null;
}
