import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 960px;
    background-color: #FFFFFF;
    align-items: center;
    justify-content: center;
    padding: 64px 0;
    margin-top: 24px;
    max-height: 574px;
    border-radius: 4px;
`
export const SuccessBuy = styled.h1`
    margin-bottom: 32px;
    margin-top: 0;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    text-align: center;


    @media (max-width: 768px) {
        padding: 0 70px;
    }
`

export const EndBuyImg = styled.img`
    margin-bottom: 32px;
`
export const GoBackButton = styled.button`
    width: 180px;
    height: 40px;
    background: #009EDD;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    font-weight: bold;
    cursor: pointer;
`

