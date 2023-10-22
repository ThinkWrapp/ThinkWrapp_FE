import { useDispatch, useSelector } from 'react-redux';
import Button from '@/components/@Shared/Button';
import { RootState } from '@/redux/reducers';
import { avatarSelectButtonDisplay } from '@/redux/actions/interfaceAction';
import { AvatarSelectButtonContainer } from './style';

export default function AvatarSelectButton() {
    const avatarButtonDisplay = useSelector((state: RootState) => state.interface.avatarButtonDisplay);
    const dispatch = useDispatch();

    const avatarDisplayHandler = (value: null) => {
        dispatch(avatarSelectButtonDisplay(value));
    };

    return (
        avatarButtonDisplay && (
            <AvatarSelectButtonContainer>
                <Button $bg="point" $size="md" $fc="light" $fw="bold">
                    선택하기
                </Button>
                <Button $bg="light" $size="md" onClick={() => avatarDisplayHandler(null)}>
                    뒤로가기
                </Button>
            </AvatarSelectButtonContainer>
        )
    );
}
