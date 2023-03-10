import { AddQuantity, Container, ItemChangeAmount,  ItemImage, ItemInfo,  ItemName, ItemPrice, ItemAmount, ItemQuantity, ItemSubtotalValue, ItemTitle, RemoveImage, RemoveItem, RemoveQuantity,  QuantityWrapper, ItemSubtotal, SubtotalContainer} from "./styles";
import removeItem from '../../assets/removeItem.svg'
import addQuant from '../../assets/AddQuantity.svg'
import removeQuant from '../../assets/RemoveQuantity.svg'
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContexts";

type CartItemProps = {
    id: number;
    title: string;
    price: number;
    image: string;
    amount: number;
}

export default function CartItem({id, title, price, image, amount}: CartItemProps){
    const {handleRemoveFromCart, handleAmount} = useContext(ProductContext);
    const subtotal = price * amount;    

    return(
        <Container>
            <ItemImage src={image}/>
            <ItemInfo>
                <ItemTitle>
                    <ItemName>{title}</ItemName>
                    <ItemPrice>R$ {price.toFixed(2)}</ItemPrice>
                </ItemTitle>
                <QuantityWrapper>
                    <ItemQuantity>
                        <ItemChangeAmount disabled={amount <= 1} onClick={() => handleAmount(id, true)}>
                            <RemoveQuantity src={removeQuant}/>
                        </ItemChangeAmount>
                        <ItemAmount>{amount}</ItemAmount>
                        <ItemChangeAmount onClick={() => handleAmount(id, false)}>
                            <AddQuantity src={addQuant}/>
                        </ItemChangeAmount>
                    </ItemQuantity>
                    <SubtotalContainer>
                        <ItemSubtotal>SUBTOTAL</ItemSubtotal>
                        <ItemSubtotalValue>R$ {subtotal.toFixed(2)}</ItemSubtotalValue>
                    </SubtotalContainer>
                </QuantityWrapper>
                <RemoveItem onClick={() => handleRemoveFromCart(id)}>
                    <RemoveImage src={removeItem}/>
                </RemoveItem>
            </ItemInfo>
        </Container>
    )
}