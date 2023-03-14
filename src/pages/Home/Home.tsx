import { useContext } from "react";
import CardItem from "../../components/CardItem/CardItem";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import { ProductContext } from "../../contexts/ProductContexts";
import BaseLayout from "../../layouts/BaseLayouts";
import { Container } from "./styles";

export default function Home(){
    const {products} = useContext(ProductContext)
    
    return(
        <BaseLayout>
            {products ? 
                <Container>
                    {products?.map((product) => <CardItem key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} amount={product.amount}/>
                    )}
                </Container>
                :
                <LoadingScreen />
            }
        </BaseLayout>
    )
}