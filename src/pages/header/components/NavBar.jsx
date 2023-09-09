import {PageLink} from '../../../globalComponents';

export const NavBar = ({language, langs}) => {
    const links = [
        {
            to: '/home',
            name: langs[language].home.title
        },
        {
            to: '/contact',
            name: langs[language].contact.title
        },
        {
            to: '/products',
            name: langs[language].products.title
        },
        {
            to: '/product-add',
            name: langs[language].productAdd.title
        },
        {
            to: '/favorites',
            name: '',
            icon: 'favorites'
        },
    ];
    return (
        <nav className='nav'>
            <PageLink to={"/home"} name={"WebMall"} className="logo"/>
            <ul className='ul'>
                {links.map((link, index) => (
                    <li key={index}>
                        <PageLink to={link.to} name={link.name} icon={link.icon}/>
                    </li>
                ))}
            </ul>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
};