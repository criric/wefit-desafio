import { Logo, NavbarContainer, LinkCart, CartImg, TextCart, ItemCart, ContainerCart, StyledLink } from './styles'
import wefitLogo from '../../assets/WeMovies.svg'
import cartIcon from '../../assets/cart-svg.svg'
import { Link } from "react-router-dom";
import { ProductContext } from '../../contexts/ProductContexts';
import { useContext } from "react";

export default function Navbar(){

    const {cart} = useContext(ProductContext)

    return(
        <NavbarContainer>
            <Link to={'/'}>
                <Logo src={wefitLogo}/>
            </Link>
            <StyledLink to={`/carrinho`} style={{ textDecoration: 'none' }}>
                <ContainerCart>
                    <LinkCart>
                        <TextCart>Meu Carrinho</TextCart>
                        <ItemCart>{cart.length ?? 0} itens</ItemCart>
                    </LinkCart>
                    <CartImg src={cartIcon} />
                </ContainerCart>
            </StyledLink>
        </NavbarContainer>
    )
}