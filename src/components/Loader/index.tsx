import { LoaderContainer, LoaderTitle, LoaderWrapper, ProgressBar, ProgressBarContainer } from './style';
import P from '../@Shared/P';
import { useProgress } from '@react-three/drei';

type LoaderProps = {
    loaded: boolean;
};

export default function Loader({ loaded }: LoaderProps) {
    const { progress } = useProgress();

    return (
        <LoaderContainer>
            <LoaderWrapper $loaded={loaded}>
                <LoaderTitle>ThinkWrapp</LoaderTitle>
                <ProgressBarContainer>
                    <ProgressBar $progress={progress} />
                </ProgressBarContainer>
                {progress < 100 && (
                    <P $fc="light" $fw="bold">
                        로딩중입니다. 잠시만 기다려 주세요.
                    </P>
                )}
            </LoaderWrapper>
        </LoaderContainer>
    );
}
