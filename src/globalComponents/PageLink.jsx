import {Link} from 'react-router-dom';

export const PageLink = (props) => {
    const {to, name} = props;
    return (
        <Link to={to}>{name}</Link>
    );
};