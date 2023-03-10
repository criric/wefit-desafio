import styled from "styled-components";

export const ButtonAddCart = styled.button < { fill: boolean } >`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 12px;
    width: 287.33px;
    height: 40px;
    background: ${props => props.fill === true ? '#039B00' : '#009EDD'};
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    font-weight: bold;
    cursor: pointer;
`