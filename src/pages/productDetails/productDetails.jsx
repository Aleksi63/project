import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services";

export const ProductDetails = () => {
    const [product, setProduct] = useState({});

    const {prID} = useParams();

    useEffect(() => {
        const fetchData = async () => { console.log('as')
            const oneProduct = await api._get(`https://dummyjson.com/products/${prID}`);
            if (oneProduct.status === 200) { 
                setProduct(oneProduct.data);
            }
        }
        fetchData();
    }, [prID]);
    return (
        <div className="product">
            <p className="title-pp">{product.title}</p>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}$</p>
        </div>
    );
};