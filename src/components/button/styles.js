import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto;
    padding-bottom: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${props => props.theme.background};
`

export const Button = styled.button`
    color: var(--black);
    background-color: ${props => props.theme.main};
    font-size: var(--text-medium);
    padding: 2.4rem;
    border-radius: .8rem;
    cursor: pointer;
    border: none;
    box-shadow: var(--box-shadow);
    transition: var(--transition);

    &:hover {
        scale: var(--scale);
    }
`