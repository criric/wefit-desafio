import styled, { keyframes } from "styled-components";

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Loading = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`

export const LoadingAnimation = styled.img`
    animation: ${Loading} 2s infinite linear;
`
