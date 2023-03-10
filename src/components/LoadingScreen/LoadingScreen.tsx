import LoadingSpinner from "../../assets/loader.png";
import { LoadingAnimation, LoadingContainer } from "./styles";

export default function LoadingScreen(){
    return(
        <LoadingContainer>
            <LoadingAnimation src={LoadingSpinner} />
        </LoadingContainer>
    )
}