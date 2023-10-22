import styled from 'styled-components';
import { StyledButton } from '../@Shared/Button/style';
import { StyledLink } from '../@Shared/Link/style';
import { InterfaceLinkButton } from '@/styles/mixin/InterfaceLinkButton';

export const InterfaceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 3rem;
    left: 50%;
    transform: translateX(-50%);
    max-width: 20%;
    /* background-color: #fff; */
`;

export const InterFaceButton = styled(StyledButton)`
    ${InterfaceLinkButton}
`;

export const InterFaceLink = styled(StyledLink)`
    ${InterfaceLinkButton}
    display: flex;
    justify-content: center;
    align-items: center;
`;
