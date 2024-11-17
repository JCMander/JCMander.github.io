import { useState } from "react";
import products from "../assets/products.json";


interface Product {
    name: string,
    flavour: string,
    price: number;
}

export const Order = () => {
    const [basket, setBasket] = useState<Product[]>([]);
    const productList = products.map(({ name, flavours, price }) => {
        return (
            <div key={`${name}-`}>
                {name}
            </div>
        )
    });

    return (
        <div>
            {productList}
        </div>
    )
};