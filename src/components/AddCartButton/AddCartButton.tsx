import { ButtonAddCart } from "./styles";

type Props = {
    children: React.ReactNode;
    onClick: () => void;
    disabled: boolean;
}

export default function AddCartButton({children, onClick, disabled}: Props){
    return(
        <ButtonAddCart fill={disabled} onClick={onClick} disabled={disabled}>
            {children}
        </ButtonAddCart>
    )
}