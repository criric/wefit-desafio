import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 11px;
    border-radius: 4px;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const MovieImg = styled.img`
    width: 147px;
    height: 188px;
`

export const MovieTitle = styled.h1`
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    margin-bottom: 0;
`

export const MoviePrice = styled.h1`    
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    margin-top: 2px;
`

export const CartContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    gap: 5px;
`

export const AddToCartIcon = styled.img``

export const QuantItem = styled.span`
    font-weight: 400;
`