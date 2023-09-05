import { useEffect, useState } from "react";
import {api} from '../../services';
import { Product } from "./components";

export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const apiData = await api._get('https://dummyjson.com/products?skip=20');
            if (apiData.status === 200) {
                setProducts(apiData.data.products);
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            <h1>Products:</h1>
            {products.map((product, index) => (
                <Product key={index} product={product}/>
            ))}
        </div>
    );
};