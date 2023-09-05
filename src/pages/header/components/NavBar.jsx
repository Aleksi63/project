import {PageLink} from '../../../globalComponents';

export const NavBar = ({language, langs}) => {
    const links = [
        {
            to: '/home',
            name: langs[language].home.title
        },
        {
            to: '/about',
            name: langs[language].about.title
        },
        {
            to: '/contact',
            name: langs[language].contact.title
        },
        {
            to: '/products',
            name: langs[language].products.title
        },
    ];
    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <PageLink to={link.to} name={link.name}/>
                    </li>
                ))}
            </ul>
        </nav>
    );
};