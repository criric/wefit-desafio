import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 52px;
    @media(max-width: 768px) {
        gap: 16px;
    }
`

export const ItemImage = styled.img`
    width: 89px;
    height: 114px;
`

export const ItemInfo = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2.5fr auto;
    grid-template-rows: 1fr;
    align-items: center;
    
    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 16px;
    }
`

export const ItemTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;    
    align-items: flex-start;

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: calc(100% - 35px);
    }
`

export const ItemName = styled.h1`
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #2F2E41;
    margin: 0;
    text-align: right;
    width: max-content;
    `

export const ItemPrice = styled.h1`
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #2F2E41;
    margin: 0;
    `
export const QuantityWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.45fr 1fr;
    align-items: center;
    gap: 52px;
    width: 100%;
    
    @media(max-width: 768px) {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        width: 100%;
    }
`

export const ItemQuantity = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const ItemChangeAmount = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
`

export const RemoveQuantity = styled.img``

export const AddQuantity = styled.img``

export const ItemAmount = styled.div`
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    width: 100%;
    max-width: 62px;
`
export const SubtotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    @media(max-width: 768px) {
        align-items: flex-end;
        width: 100%;
    }
`

export const ItemSubtotal = styled.h1`
    display: none;

    @media(max-width: 768px) {
        display: block;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #999999;
        margin: 0;
    }
`

export const ItemSubtotalValue = styled.h1`
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`

export const RemoveItem = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: max-content;

    @media(max-width: 768px) {
        position: absolute;
        right: 8px;
        margin-top: 2px;
    }
`

export const RemoveImage = styled.img``

export const ContainerMobile = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        max-width: 100%;
        margin-bottom: 24px;
    }
`