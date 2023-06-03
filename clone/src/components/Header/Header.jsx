import classes from "./Header.module.css";
import { Link } from 'react-router-dom';
import Partner from "../../components/Partner/Partner";

const Header = () => {

    return (
        <nav className={classes.nav}>
            <div className={classes.header}>
                <ul>
                    <li>Add a restaurant</li>
                    <li>Login</li>
                    <li>Sign up</li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;