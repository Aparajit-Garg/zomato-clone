import {useState} from 'react';
import classes from "./Landing.module.css";
import Header from "../../components/Header/Header";

const LandingPage = () => {

    return (
        <div>
            <div className={classes.image}>
                <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="header image" />
            </div>
            <Header />
        </div>
    )
}

export default LandingPage;