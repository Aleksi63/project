import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services";

export const ProductDetails = () => {
    const [product, setProduct] = useState({});

    const {prID} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const apiData = await api._get(`https://dummyjson.com/products/${prID}`);
            if (apiData.status === 200) {
                setProduct(apiData.data);
            }
        }
        fetchData();
    }, [prID]);
    return (
        <div>
            <p>{product.title}</p>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}$</p>
        </div>
    );
};