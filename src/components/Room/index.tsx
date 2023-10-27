import RoomBackground from './Background';
import RoomGround from './Ground';

type RoomProps = {
    loaded: boolean;
};

export default function Room({ loaded }: RoomProps) {
    return (
        <>
            <RoomBackground loaded={loaded} />
            {loaded && <RoomGround />}
        </>
    );
}
