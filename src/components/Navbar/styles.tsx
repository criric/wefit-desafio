import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 250px;
    margin-bottom: 24px;

    @media (max-width: 768px) {
        padding: 24px 10px;
    }
`

export const Logo = styled.img``

export const CartImg = styled.img``

export const ContainerCart = styled.div`
    display: flex;
    align-items: center;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
`

export const LinkCart = styled.div`
    margin-right: 10px;
    `

export const TextCart = styled.p`
    text-decoration: none;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;

    @media (max-width: 768px) {
        display: none;
    }
`

export const ItemCart = styled.p`
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #999999;
    margin: 0;
    text-align: right;
`


