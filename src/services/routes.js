import {Home, About, Contact, Products, ProductDetails} from '../pages';

export const routesMap = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/products',
        element: <Products />
    },
    {
        path: '/products/:prID',
        element: <ProductDetails />
    },
];