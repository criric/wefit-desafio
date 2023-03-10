import { Product } from "../components/CardItem/CardItem";
import { createContext, useEffect, useState } from "react";
import { Api } from "../providers";

type ProductContextType = {
    products: Product[];
    handleAddInCart: (id: number) => void;
    cart: Product[];
    handleRemoveFromCart: (id: number) => void;
    handleAmount: (id: number, isDecrease: boolean) => void;
    clearCart: () => void;
    setCart: (cart: Product[]) => void;
}

export const ProductContext = createContext({
    products: [], 
    handleAddInCart: () => {},
    cart: [],
    handleRemoveFromCart: () => {},
    handleAmount: () => {},
    clearCart: () => {},
    setCart: () => {}
} as ProductContextType);

export default function ProductContextProvider({children}: {children: React.ReactNode}){
    const [products, setProducts] = useState<ProductContextType['products']>([]);
    const [cart, setCart] = useState<ProductContextType['cart']>([]);    

    const getProducts = async () => {
        const response = await Api.get('/products');
        setProducts(response.data);
        getCart();
    }

    const getCart = async () => {
        const response = await Api.get('/cart');
        setCart(response.data);
    }

    const handleAddInCart = async(id: number) => {
        const data = products.find((product) => product.id === id);
        const response = await Api.post('/cart', {...data, amount: 1})   ;
        const newCart = [...cart, response.data];
        setCart(newCart);
    }

    const handleAmount = async(id: number, isDecrease: boolean) => {
        const response = await Api.get(`/cart?id=${id}`);   
        const newAmount = response.data[0].amount+(isDecrease ? -1 : 1);     
        const updateCart = await Api.put(`/cart/${id}`, {...response.data[0], amount: newAmount})
        const newCart = cart.map((item) => {
            if(item.id === updateCart.data.id){
                return updateCart.data
            }
            return item
        })
        setCart(newCart)
    }


    const handleRemoveFromCart = async(id: number) => {
        await Api.delete(`/cart/${id}`);
        getCart();    
    }

    const clearCart = async() => {
        await Promise.all(cart.map((item) => Api.delete(`/cart/${item.id}`)));        
        getCart();
    }

    useEffect(() => {
        setTimeout(() => {
            getProducts()
        }, 10000)
    }, [])

    return(
        <ProductContext.Provider value={{products, handleAddInCart, cart, handleRemoveFromCart, handleAmount, clearCart, setCart}}>
            {children}
        </ProductContext.Provider>
    )
}