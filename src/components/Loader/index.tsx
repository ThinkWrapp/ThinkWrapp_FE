import { LoaderContainer, LoaderTitle, LoaderWrapper, ProgressBar, ProgressBarContainer } from './style';
import P from '../@Shared/P';
import { useLoading } from '@/hooks/useLoading';

export default function Loader() {
    const { loaded, progress } = useLoading();

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
