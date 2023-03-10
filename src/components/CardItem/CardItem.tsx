import { AddToCartIcon, CartContainer, Container, MovieImg, MoviePrice, MovieTitle, QuantItem } from "./styles";
import { useContext } from "react";
import AddCart from "../../assets/addCart.svg";
import AddCartButton from "../AddCartButton/AddCartButton";
import { ProductContext } from "../../contexts/ProductContexts";

export type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
}

export default function CardItem({id, title, price, image}: Product) {

    const {handleAddInCart, cart} = useContext(ProductContext)
    const isInCart = cart?.findIndex((item: Product) => item.id === id) !== -1;
    
    return (
        <Container >
            <MovieImg src={image}/>
            <MovieTitle>{title}</MovieTitle>
            <MoviePrice>R$ {price.toFixed(2)}</MoviePrice>
            <AddCartButton onClick={() => handleAddInCart(id)} disabled={isInCart}>
                <CartContainer>
                    <AddToCartIcon src={AddCart}/>
                    <QuantItem>{isInCart ? 1 : 0}</QuantItem>
                </CartContainer>{isInCart ? 'ITEM ADICIONADO' : 'ADICIONAR AO CARRINHO'}
            </AddCartButton>
        </Container>
    )
}