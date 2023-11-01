import { commonAttributes } from '@/styles';
import styled from 'styled-components';

type InputStyleProps = {
    type: React.InputHTMLAttributes<HTMLInputElement>['type'];
};

const CommonInput = commonAttributes('input');
const CommonLabel = commonAttributes('label');
export const StyledInput = styled(CommonInput)<InputStyleProps>`
    ${({ type, theme }) => {
        switch (type) {
            case 'checkbox':
                return `
                    appearance: none;
                    width: 2rem;
                    height: 2rem;
                    border-radius: 0.3rem;
                    background-color: ${theme.bg.light};
                    cursor: pointer;
                
                    &:checked {
                        background-color: ${theme.bg.point};
                        background-image: url('/images/check.svg');
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                `;
            default:
                return `
                `;
        }
    }};
`;

export const StyledLabel = styled(CommonLabel)`
    color: ${({ theme }) => theme.fc.light};
    cursor: pointer;
`;
