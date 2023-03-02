import styled from "styled-components";

export const Wrapper = styled.main`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    display: flex;
    flex-direction: column;
`

export const Banner = styled.img`
    width: 100%;
`