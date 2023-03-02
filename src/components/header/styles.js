import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100%;
    background-color: ${props => props.theme.main};
    padding: 3.2rem 6.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.img`
    width: 12.5rem;
`

export const ThemeToggler = styled.button`
    outline: none;
    background-color: transparent;
    font-size: var(--text-medium);
    border: 1px solid transparent;
    border-radius: 32px;
    transition: var(--transition);

    &:hover {
        scale: var(--scale);
        border-color: ${props => props.theme.text};
        cursor: pointer;
    }
`