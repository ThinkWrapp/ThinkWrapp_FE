import styled from 'styled-components';

export const DivideLogInTypeContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 2.4rem 1.6rem 3.6rem;

    hr {
        display: flex;
        aling-items: center;
        flex: 2;
        width: 100%;
        height: 0.1rem;
        background-color: ${({ theme }) => theme.bg.secondary};
    }

    span {
        display: flex;
        align-items: center;
        flex: 1.5;
        width: 100%;
        line-height: 0;
    }
`;
