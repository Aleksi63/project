import { useContext, useEffect, useState } from "react";
import {FavoritesContext, api} from '../../services';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { PageLink } from "../../globalComponents";

export const Favorites = () => {

    const [favs, setFavs] = useState([]);

    const {favorites, isFavorite, toggleFavorites} = useContext(FavoritesContext);

    useEffect(() => {
        const fetchData = async () => {
            const apiData = await api._get('https://dummyjson.com/products');
            if (apiData.status === 200) {
                let newFavs = apiData.data.products.filter((item) => favorites.includes(item.id));
                setFavs(newFavs);
            }
        }
        fetchData();
    }, [favorites]);

    return (
        <div>
            <p className="fav-text">Favorites:</p>
            <div className="main-thumb">
                {
                    favs.map((fav, index) => (
                        <div key={index}>
                            <div className="product-top">
                                <p>{fav.title}</p>
                                <FavoriteIcon
                                    onClick={() => toggleFavorites(fav.id)}
                                    sx={{color: isFavorite(fav.id) ? '#ff5959' : '#085f63' }}
                                />
                            </div>
                            <div className="thumb">
                                <img src={fav.thumbnail} alt={fav.title} />
                                <p>{fav.description}</p>
                                <p className="price">{fav.price}$</p>
                                <div className="btn-wrapper">
                                    <PageLink to={`/products/${fav.id}`} name={'see more'} className="btn-cart1 cart-1"/>
                                    <PageLink to={`/product-edit/${fav.id}`} name='Edit' className="btn-cart2 cart-1"/> 
                                </div> 
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};