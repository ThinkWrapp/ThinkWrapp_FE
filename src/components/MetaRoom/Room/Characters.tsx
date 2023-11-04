import Avatar from '@/components/3DModels/Avatar';
import { GridMethodsType, useGrid } from '@/hooks/useGrid';
import { RootState } from '@/redux/reducers';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

const Characters = () => {
    const roomJoined = useSelector((state: RootState) => state.socket.roomJoined);
    const grid = useGrid() as GridMethodsType;

    if (!roomJoined || !grid) return null;
    const { characters } = roomJoined;
    const { gridToVector3 } = grid;

    return (
        <>
            {characters.map((character) => (
                <Suspense key={character.session + '-' + character.id}>
                    <group>
                        <Avatar
                            id={character.id}
                            position={gridToVector3(character.position as number[]) as THREE.Vector3}
                            avatarUrl={character.avatarUrl}
                        />
                    </group>
                </Suspense>
            ))}
        </>
    );
};
export default Characters;
