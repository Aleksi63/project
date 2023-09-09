import { Home, Contact, Products, ProductDetails, ProductAdd, ProductEdit, Favorites } from '../pages';

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
    {
        path: '/product-add',
        element: <ProductAdd />
    },
    {
        path: '/product-edit/:prID',
        element: <ProductEdit />
    },
    {
        path: '/products/category/:catURL',
        element: <Products />
    },
    {
        path: '/favorites',
        element: <Favorites />
    },
];