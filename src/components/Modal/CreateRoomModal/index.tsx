// import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import Modal from '..';
import Button from '@/components/@Shared/Button';
import CreateRoomLabelInput from './CreateRoomLabelInput';
// import LabelInput from '@/components/@Shared/LabelInput';
import { RootState } from '@/redux/reducers';
import { closeModal } from '@/redux/actions/modalAction';
import { createRoomSchema } from '@/schemas/room';
import { CreateRoomSchema } from '@/types/room';
import { ModalTitle } from '../style';
import { CreateRoomButtonGroup, CreateRoomModalForm, CreateRoomModalHeader } from './style';
import { socketCreateRoom } from '@/redux/actions/socketAciton';
import { saveRoom } from '@/redux/actions/roomPersistAction';
import { useNavigate } from 'react-router-dom';
import { ROUTE_ROOM } from '@/constants/route';
import { useVideoContext } from '@/hooks/useVideoContext';

export default function CreateRoomModal() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const avatarUrl = useSelector((state: RootState) => state.avatar.avatarUrl);
    const userName = useSelector((state: RootState) => state.user.userName);
    // const [checkPassword, setCheckPassword] = useState<boolean>(false);
    const { startMediaStream, peerId } = useVideoContext();

    const {
        register,
        handleSubmit,
        reset,
        // unregister,
        formState: { errors },
    } = useForm<CreateRoomSchema>({
        mode: 'onChange',
        resolver: zodResolver(createRoomSchema),
    });

    const onSubmit: SubmitHandler<CreateRoomSchema> = async (roomData) => {
        const roomId = uuidv4();
        roomData.id = roomId;
        roomData.avatarUrl = avatarUrl;
        roomData.peerId = peerId;
        roomData.userName = userName;

        dispatch(socketCreateRoom(roomData));
        reset();
        dispatch(closeModal());
        // TODO: 방 입장
        dispatch(saveRoom(roomId));
        startMediaStream();
        navigate(`${ROUTE_ROOM}/${roomId}}`);
    };

    const closeModalHandler = () => {
        dispatch(closeModal());
        reset();
    };

    // const checkPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     if (checkPassword) {
    //         unregister('password');
    //     }
    //     setCheckPassword(e.target.checked);
    // };

    return (
        <Modal>
            <CreateRoomModalHeader>
                <ModalTitle>방 만들기</ModalTitle>
            </CreateRoomModalHeader>
            <CreateRoomModalForm onSubmit={handleSubmit(onSubmit)}>
                <CreateRoomLabelInput
                    id="roomName"
                    type="text"
                    labelText="방 이름"
                    register={register}
                    errors={errors}
                    required
                />
                <CreateRoomLabelInput
                    id="roomLimitPeople"
                    type="number"
                    labelText="방 인원수(최대 6명)"
                    register={register}
                    errors={errors}
                    required
                />
                {/* <CheckPasswordWrapper>
                    <LabelInput
                        id="checkPassword"
                        type="checkbox"
                        labelText="비밀번호 설정"
                        onChange={checkPasswordHandler}
                    />
                </CheckPasswordWrapper>
                {checkPassword && (
                    <CreateRoomLabelInput
                        id="password"
                        type="password"
                        labelText="방 비밀번호"
                        register={register}
                        errors={errors}
                    />
                )} */}
                <CreateRoomButtonGroup>
                    <Button type="submit" $bg="point" $size="md" $fc="light" style={{ flex: 2 }}>
                        생성
                    </Button>
                    <Button onClick={closeModalHandler} $bg="light" $size="md" style={{ flex: 1 }}>
                        닫기
                    </Button>
                </CreateRoomButtonGroup>
            </CreateRoomModalForm>
        </Modal>
    );
}
