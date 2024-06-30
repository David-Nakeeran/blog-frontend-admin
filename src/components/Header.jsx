import { NavLink } from "react-router-dom";


const activeLinkStyle = (isActive) => {
    return isActive ? "active-link" : null;
}

export default function Header() {

    return (
        <header>
            <nav>
                <div>
                    <NavLink
                        to="."
                        className={({isActive}) => 
                        activeLinkStyle(isActive)}>
                        Home
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/login"
                        className={({isActive}) => 
                        activeLinkStyle(isActive)}>
                        Login
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}