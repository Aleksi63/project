import { useState, createContext } from "react";
import { storage } from "../storage";
export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({children}) => {

    const [favorites, setFavorites] = useState(
        storage.exists('favorites') ? storage.getJson('favorites') : []
    );

    const toggleFavorites = (id) => {
        let newFavorites = [...favorites];
        let index = newFavorites.findIndex((item) => item === id);
        if (index > -1) {
            newFavorites.splice(index, 1);
        } else {
            newFavorites.push(id);
        }
        setFavorites(newFavorites);
        storage.set('favorites', JSON.stringify(newFavorites));
    }

    const isFavorite = (id) => {
        let index = favorites.findIndex((item) => item === id);
        return index > -1;
    }

    return (
        <FavoritesContext.Provider value={{
            favorites,
            toggleFavorites,
            isFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    );
};
