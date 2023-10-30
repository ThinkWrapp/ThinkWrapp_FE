import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { RootState } from '@/redux/reducers';
import { avatarSelectButtonDisplay } from '@/redux/actions/interfaceAction';
import { linkHome } from '@/redux/actions/RoutePerstistAction';
import { resetAvatar, saveAvatar } from '@/redux/actions/avatarPersistAction';
import { updateAvatar } from '@/api/auth';
import Button from '@/components/@Shared/Button';
import { AvatarSelectButtonContainer } from './style';
import { AVATAR } from '@/constants/auth';
import { MAN_AVATAR_URL, WOMAN_AVATAR_URL } from '@/constants/route';

export default function AvatarSelectButtons() {
    const avatarButtonDisplay = useSelector((state: RootState) => state.interface.avatarButtonDisplay);
    const dispatch = useDispatch();

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
            dispatch(linkHome());
        },
    });

    const selectAvatarHandler = () => {
        if (!avatarButtonDisplay) return;

        switch (avatarButtonDisplay) {
            case AVATAR.gender.male:
                avatarSelect({ avatarUrl: MAN_AVATAR_URL });
                dispatch(saveAvatar(MAN_AVATAR_URL));
                break;
            case AVATAR.gender.female:
                avatarSelect({ avatarUrl: WOMAN_AVATAR_URL });
                dispatch(saveAvatar(WOMAN_AVATAR_URL));
                break;
        }

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
