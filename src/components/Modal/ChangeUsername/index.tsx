import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { userName } from '@/redux/actions/userAction';
import { closeModal } from '@/redux/actions/modalAction';
import { RootState } from '@/redux/reducers';
import { updateUsername } from '@/api/auth';
import { changeUsernameSchema } from '@/schemas/auth';
import { ChangeUsernameSchema } from '@/types/auth';
import Button from '@/components/@Shared/Button';
import Modal from '..';
import ChangeUsernameInput from './ChangeUsernameLabelInput';
import {
    ChangeUsernameButtonGroup,
    ChangeUsernameModalForm,
    ChangeUsernameModalHeader,
    CurrentUsername,
} from './style';
import { ModalDescription, ModalTitle } from '../style';
import { saveUserName } from '@/redux/actions/avatarPersistAction';

export default function ChangeUserNameModal() {
    const dispatch = useDispatch();
    const currentUserName = useSelector((state: RootState) => state.user.userName);
    const savedUserName = useSelector((state: RootState) => state.avatar.saveUserName);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ChangeUsernameSchema>({
        mode: 'onChange',
        resolver: zodResolver(changeUsernameSchema),
    });

    const { mutate: ChangeUserName } = useMutation(updateUsername, {
        onSuccess: (username) => {
            toast.success('닉네임이 변경되었습니다.');
            dispatch(userName(username));
            dispatch(saveUserName(username));
        },
        onError: () => {
            toast.error('닉네임 변경에 실패했습니다.');
        },
        onSettled: () => {
            dispatch(closeModal());
        },
    });

    const onSubmit: SubmitHandler<ChangeUsernameSchema> = async (changeUsernameData) => {
        ChangeUserName(changeUsernameData);
        reset();
    };

    const closeModalHandler = () => {
        dispatch(closeModal());
        reset();
    };

    return (
        <Modal>
            <ChangeUsernameModalHeader>
                <ModalTitle>닉네임 변경</ModalTitle>
                <ModalDescription>8자 이하의 닉네임으로 변경 가능합니다.</ModalDescription>
            </ChangeUsernameModalHeader>
            <CurrentUsername>현재 닉네임: {currentUserName || savedUserName}</CurrentUsername>
            <ChangeUsernameModalForm onSubmit={handleSubmit(onSubmit)}>
                <ChangeUsernameInput
                    id="username"
                    type="text"
                    labelText="변경할 닉네임"
                    register={register}
                    errors={errors}
                    required
                />
                <ChangeUsernameButtonGroup>
                    <Button type="submit" $bg="point" $size="sm" $fc="light" style={{ flex: 2 }}>
                        생성
                    </Button>
                    <Button onClick={closeModalHandler} $bg="light" $size="sm" style={{ flex: 1 }}>
                        닫기
                    </Button>
                </ChangeUsernameButtonGroup>
            </ChangeUsernameModalForm>
        </Modal>
    );
}
