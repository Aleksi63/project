import { useEffect, useState } from "react";
import {api} from '../../services';
import { CatDiv, Product } from "./components";
import { useParams } from "react-router-dom";

export const Products = () => {
    const [products, setProducts] = useState([]);

    const {catURL} = useParams();

    useEffect(() => {

        let category = '';
        if (catURL) {
            category = `/category/${catURL}`
        }

        const fetchData = async () => {
            const apiData = await api._get(`https://dummyjson.com/products${category}?skip=3`);
            if (apiData.status === 200) {
                setProducts(apiData.data.products);
            }
        }
        fetchData();
    }, [catURL]);
    return (
        <div>
            <CatDiv />
            <Product products={products}/>
        </div>
    );
};