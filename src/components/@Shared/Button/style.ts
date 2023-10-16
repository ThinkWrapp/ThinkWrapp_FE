import styled from 'styled-components';
import { ButtonProps } from '.';
import { commonAttributes } from '@/styles';

type ButtonStyleProps = Omit<ButtonProps, 'children' | 'as' | 'href'>;

const CommonButton = commonAttributes('button');
export const StyledButton = styled(CommonButton)<ButtonStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;
`;
