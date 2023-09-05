import { useContext } from "react";
import { NavBar } from "./components";
import Button from '@mui/material/Button';
import { LanguageContext } from "../../services";

export const Header = () => {

    const {language, changeLanguage, langs} = useContext(LanguageContext);

    return (
        <header>
           <NavBar language={language} langs={langs}/>
            <Button onClick={() => changeLanguage('en')}>En</Button>
            <Button onClick={() => changeLanguage('ka')}>Ka</Button>
        </header>
    );
};