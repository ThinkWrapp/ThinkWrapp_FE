import { useDispatch, useSelector } from 'react-redux';
import { InterFaceButton } from './style';
import { RootState } from '@/redux/reducers';
import { BUILD_MODE, buildMode, resetMode } from '@/redux/actions/modeAction';

const BackButton = () => {
    const mode = useSelector((state: RootState) => state.mode.mode);
    const dispatch = useDispatch();

    const modeHandler = () => {
        mode === BUILD_MODE ? dispatch(resetMode()) : dispatch(buildMode());
    };

    return (
        <InterFaceButton
            $fc="light"
            onClick={modeHandler}
            title={mode === BUILD_MODE ? '맵으로 이동' : '꾸미기 모드로 이동'}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width={24}
                height={24}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
        </InterFaceButton>
    );
};
export default BackButton;
