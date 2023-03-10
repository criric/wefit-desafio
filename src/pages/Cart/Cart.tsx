import { CartInfos, Container, ContainerItem, EndOrder, GoBackButton, Header, NoItems, NoItemsImg, Product, Quantity, Subtotal, Total, TotalInfo, TotalPrice, Wrapper } from "./styles";
import NoItem from '../../assets/NoItem.svg'
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import BaseLayout from "../../layouts/BaseLayouts";
import { ProductContext } from "../../contexts/ProductContexts";

export default function Carrinho(){
    const {cart, clearCart} = useContext(ProductContext)

    return(
        <BaseLayout>
            {cart.length > 0 ?
                <Wrapper>
                    <Header>
                        <Product>PRODUTO</Product>
                        <Quantity>QTD</Quantity>
                        <Subtotal>SUBTOTAL</Subtotal>
                    </Header>
                    <ContainerItem>
                        {cart.map((product) => {
                            return <CartItem key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} amount={product.amount}></CartItem>
                        })}
                    </ContainerItem>      
                    <CartInfos>
                        <Link to={`/end`}>
                            <EndOrder onClick={() => clearCart()}>FINALIZAR PEDIDO</EndOrder>
                        </Link>
                        <TotalInfo>
                            <Total>TOTAL</Total>
                            <TotalPrice>R$ {cart.reduce((acc, item) => {
                                acc += item.price * item.amount
                                return acc
                            }, 0).toFixed(2)}</TotalPrice>
                        </TotalInfo>
                    </CartInfos>                              
                </Wrapper>
                :
                <Container>
                    <NoItems>Parece que não há nada por aqui :(</NoItems>
                    <NoItemsImg src={NoItem}></NoItemsImg>
                    <Link to={`/`}>
                        <GoBackButton>VOLTAR</GoBackButton>
                    </Link>
                </Container>         
            }  
        </BaseLayout>
    )
}