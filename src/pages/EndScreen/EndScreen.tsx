import BaseLayout from "../../layouts/BaseLayouts";
import { Container, EndBuyImg, GoBackButton, SuccessBuy } from "./styles";
import EndBuy from "../../assets/EndBuy.svg";
import { Link } from "react-router-dom";

export default function EndScreen() {
  return (
    <BaseLayout>
        <Container>
            <SuccessBuy>Compra realizada com sucesso!</SuccessBuy>
            <EndBuyImg src={EndBuy}></EndBuyImg>
            <Link to={`/`}>
                <GoBackButton>VOLTAR</GoBackButton>
            </Link>
        </Container> 
    </BaseLayout>
  );
}