import styled from 'styled-components';
import { ButtonProps } from '.';
import { darken } from 'polished';
import { commonAttributes } from '@/styles';

type ButtonStyleProps = {
    $size?: ButtonProps['$size'];
};

const CommonButton = commonAttributes('button');
export const StyledButton = styled(CommonButton)<ButtonStyleProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        ${({ $bg, theme }) => {
            const hoverColor = theme.bg[$bg!] || $bg;
            if (!hoverColor) return;
            return `background-color: ${darken(0.1, hoverColor)};`;
        }};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.bg.secondary};
    }

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
