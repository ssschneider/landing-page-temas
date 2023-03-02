import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};

    *::selection {
        background-color: ${props => props.theme.main};
        color: ${props => props.theme.background};
    }
`

export const Wrapper = styled.section`
    width: 100%;
    max-width: 80%;
    margin: 12rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.img`
    width: 45rem;
`

export const Texts = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    width: 41rem;
`

export const Title = styled.h2`
    font-size: var(--text-big);
`

export const Subtitle = styled.h4`
    font-size: var(--text-medium);
`

export const Text = styled.p`
    font-size: var(--text-small);
    text-align: justify;
    margin-top: 1.8rem;
`