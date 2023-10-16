import styled from 'styled-components';
import { PProps } from '.';
import { commonAttributes } from '@/styles';

type PStyleProps = {
    fs?: PProps['fontSize'];
    fc?: PProps['fontColor'];
    fw?: PProps['fontWeight'];
};

const CommonP = commonAttributes('p');
export const StyledP = styled(CommonP)<PStyleProps>``;
