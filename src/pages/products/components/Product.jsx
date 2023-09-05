import { PageLink } from "../../../globalComponents";

export const Product = (props) => {
    const {product} = props;
    return (
        <div>
            <p>{product.title}</p>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}$</p>
            <PageLink to={`/products/${product.id}`} name={'see more'}/>
        </div>
    )
}
