// import {useState} from 'react';
import classes from "./Landing.module.css";
// import Header from "../../components/Header/Header";

const LandingPage = () => {

    return (
        <div>
            <div className={classes.container}>
                <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="zomato blah" />
                <div className={classes.overlay}>
                    <ul>
                        <li>
                            Add a restaurant
                        </li>
                        <li>
                            Log In
                        </li>
                        <li>
                            Sign Up
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;