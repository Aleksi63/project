import {Link} from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const PageLink = (props) => {
    const {to, name, icon, className} = props;
    return (
        <Link to={to} className={className}>
            {
              icon === 'favorites' ?
                <FavoriteIcon className='fav-icon'/> : 
                name
            }
        </Link>
    );
};