import { useDispatch, useSelector } from 'react-redux';
import Button from '@/components/@Shared/Button';
import { RootState } from '@/redux/reducers';
import { avatarSelectButtonDisplay } from '@/redux/actions/interfaceAction';
import { AvatarSelectButtonContainer } from './style';
import { useMutation } from '@tanstack/react-query';
import { updateAvatar } from '@/api/auth';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { resetAvatar, saveAvatar } from '@/redux/actions/avatarPersistAction';

export default function AvatarSelectButton() {
    const avatarButtonDisplay = useSelector((state: RootState) => state.interface.avatarButtonDisplay);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const avatarDisplayHandler = (value: string | null) => {
        dispatch(avatarSelectButtonDisplay(value));
    };

    const { mutate: avatarSelect } = useMutation(updateAvatar, {
        onSuccess: (response) => {
            dispatch(saveAvatar(response));
            toast.success('캐릭터 선택에 성공했습니다.');
        },
        onError: () => {
            toast.error('캐릭터 선택에 실패했습니다.');
            dispatch(resetAvatar());
        },
        onSettled: () => {
            navigate('/');
        },
    });

    const selectAvatarHandler = () => {
        if (!avatarButtonDisplay) return;
        avatarSelect({ avatar: avatarButtonDisplay });
        avatarDisplayHandler(null);
    };

    return (
        avatarButtonDisplay && (
            <AvatarSelectButtonContainer>
                <Button $bg="point" $size="md" $fc="light" $fw="bold" onClick={selectAvatarHandler}>
                    선택하기
                </Button>
                <Button $bg="light" $size="md" onClick={() => avatarDisplayHandler(null)}>
                    뒤로가기
                </Button>
            </AvatarSelectButtonContainer>
        )
    );
}
