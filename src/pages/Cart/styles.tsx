import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #FFFFFF;
    border-radius: 4px;
    padding: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 950px;

    @media(max-width: 768px) {
        padding: 16px;
    }
`

export const Header = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;  
    gap: 21px;
    margin-bottom: 21px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const Product = styled.h1`
    margin: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #999999;
`

export const Quantity = styled.h1`
    margin: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #999999;
`

export const Subtotal = styled.h1`
    margin: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #999999;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 960px;
    background-color: #FFFFFF;
    align-items: center;
    justify-content: center;
    padding: 64px 0;
    margin-top: 24px;
    border-radius: 4px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 64px 0;
        text-align: center;
    }
`


export const ContainerItem = styled.div`
    width: 960px;
    display: flex;
    flex-direction: column;
    gap: 21px;

    @media (max-width: 768px) {
        width: 100%;
        min-height: 520px;
    }
`

export const NoItems = styled.h1`
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    text-align: center;
    margin-bottom: 32px;
    margin-top: 0;

    @media (max-width: 768px) {
        padding: 0 85px;
    }
`

export const NoItemsImg = styled.img`
    margin-bottom: 32px;

    @media (max-width: 768px) {
        width: 100%;
    }
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

export const CartInfos = styled.div`
    border-top: 1px solid #999999;
    padding-top: 21px;
    display: flex;
    justify-content: space-between;
    margin-top: 21px;

    
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const EndOrder = styled.button`
    padding: 8px;
    gap: 12px;
    width: 235.42px;
    height: 40px;
    background: #009EDD;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const TotalInfo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;

    @media (max-width: 768px) {
        justify-content: flex-end;
        margin-bottom: 16px;
    }

`

export const Total = styled.h1`
    margin: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #999999;
    margin-right: 15px;
`

export const TotalPrice = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #2F2E41;
    margin: 0;
`