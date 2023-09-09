import { useEffect, useState } from "react";
import {api} from '../../../services';
import { PageLink } from "../../../globalComponents";
export const CatDiv = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const apiData = await api._get('https://dummyjson.com/products/categories');
            if (apiData.status === 200) { 
                setCategories(apiData.data);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="catMainDiv">
            <p className="catDiv-p">categories:</p>
            <ul className="catDiv">
                {categories.map((cat, index) => (
                    <li key={index}>
                        <PageLink to={`/products/category/${cat}`} name={cat}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};