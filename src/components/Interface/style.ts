import styled from 'styled-components';
import { StyledButton } from '../@Shared/Button/style';
import { StyledLink } from '../@Shared/Link/style';
import { InterfaceLinkButton } from '@/styles/mixin/InterfaceLinkButton';

export const InterfaceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    position: fixed;
    inset: 3rem;
    pointer-events: none;
    user-select: none;
`;

export const RouteInterfaceWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    pointer-events: auto;
`;

type InterFaceButtonProps = {
    $toggle?: boolean;
};

export const InterFaceButton = styled(StyledButton)<InterFaceButtonProps>`
    ${InterfaceLinkButton}

    ${({ $toggle }) =>
        $toggle &&
        `
        background-color: #3730a3
    `}
`;

export const InterFaceLink = styled(StyledLink)`
    ${InterfaceLinkButton}
    display: flex;
    justify-content: center;
    align-items: center;
`;
