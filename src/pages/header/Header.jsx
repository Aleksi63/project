import { useContext } from "react";
import { NavBar } from "./components";
import Button from '@mui/material/Button';
import { LanguageContext } from "../../services";

export const Header = () => {

    const {language, changeLanguage, langs} = useContext(LanguageContext);

    return (
        <header className="header">
                <NavBar language={language} langs={langs}/>
            <div className="btns">
                <Button className="btn-langs" onClick={() => changeLanguage('en')}>En</Button>
                <Button className="btn-langs" onClick={() => changeLanguage('ka')}>Ka</Button>
            </div>
        </header>
    );
};