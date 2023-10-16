import styled from 'styled-components';
import { SpanProps } from '.';
import { commonAttributes } from '@/styles';

type SpanStyleProps = Omit<SpanProps, 'children'>;

const CommonSpan = commonAttributes('span');
export const StyledSpan = styled(CommonSpan)<SpanStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
`;
