import styled from 'styled-components';
import { ButtonProps } from '.';
import { commonAttributes } from '@/styles';

type ButtonStyleProps = {
    fs: ButtonProps['fontSize'];
    fc: ButtonProps['fontColor'];
    fw: ButtonProps['fontWeight'];
};

const CommonButton = commonAttributes('button');
export const StyledButton = styled(CommonButton)<ButtonStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
`;
