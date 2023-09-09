import { useContext } from "react";
import { PageLink } from "../../../globalComponents";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoritesContext } from "../../../services";
export const Product = (props) => {
    const {products} = props;

    const { isFavorite, toggleFavorites } = useContext(FavoritesContext);

    return (
        <div className="main-thumb">
            {products.map((pr, index) => (
                <div key={index}>
                    <div className="product-top">
                        <p>{pr.title}</p>
                        <FavoriteIcon
                            onClick={() => toggleFavorites(pr.id)}
                            sx={{color: isFavorite(pr.id) ? '#ff5959' : '#085f63' }}
                        />
                    </div>
                    <div className="thumb">
                        <img src={pr.thumbnail} alt={pr.title} />
                        <p>{pr.description}</p>
                        <p className="price">{pr.price}$</p>
                       <div className="btn-wrapper">
                       <PageLink to={`/products/${pr.id}`} name={'see more'} className="btn-cart1 cart-1"/>
                        <PageLink to={`/product-edit/${pr.id}`} name='Edit' className="btn-cart2 cart-1"/>
                       </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
