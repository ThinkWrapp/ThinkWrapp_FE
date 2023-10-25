import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import Modal from '..';
import CreateRoomLabelInput from './CreateRoomLabelInput';
import { CreateRoomButtonGroup, CreateRoomModalForm, CreateRoomModalHeader } from './style';
import Button from '@/components/@Shared/Button';
import { useDispatch } from 'react-redux';
import { closeModal } from '@/redux/actions/modalAction';
import { ModalTitle } from '../style';
import { zodResolver } from '@hookform/resolvers/zod';
import { createRoomSchema } from '@/schemas/room';
import { CreateRoomSchema } from '@/types/room';
import socket from '@/socket';

export default function CreateRoomModal() {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CreateRoomSchema>({
        mode: 'onChange',
        resolver: zodResolver(createRoomSchema),
    });

    const onSubmit: SubmitHandler<CreateRoomSchema> = (roomData) => {
        const roomId = uuidv4();
        roomData.id = roomId;

        socket.emit('createRoom', roomData);
        reset();
        dispatch(closeModal());
    };

    const closeModalHandler = () => {
        dispatch(closeModal());
        reset();
    };

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
                <CreateRoomLabelInput
                    id="password"
                    type="password"
                    labelText="방 비밀번호"
                    register={register}
                    errors={errors}
                />
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
