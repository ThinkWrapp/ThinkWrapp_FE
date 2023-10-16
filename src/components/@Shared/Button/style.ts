import styled from 'styled-components';
import { ButtonProps } from '.';
import { commonAttributes } from '@/styles';

type ButtonStyleProps = Omit<ButtonProps, 'children' | 'as' | 'href'>;

const CommonButton = commonAttributes('button');
export const StyledButton = styled(CommonButton)<ButtonStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ $size }) => {
        switch ($size) {
            case 'sm':
                return `
                    padding: 0.8rem 1.6rem;
                    border-radius: 0.2rem;
                `;
            case 'md':
                return `
                    padding: 1.2rem 2.4rem;
                    border-radius: 0.4rem;
                `;
            case 'lg':
                return `
                    padding: 1.6rem 3.2rem;
                    border-radius: 0.6rem;
                `;
            default:
                return;
        }
    }}
`;
